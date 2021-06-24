const { series, src, task, dest, parallel } = require("gulp");
const shell = require("gulp-shell");
const GulpSSH = require("gulp-ssh");
const GulpZip = require("gulp-zip");
const config = {
    ssh: {
        dev: {
            host: "192.168.2.250",
            port: "22",
            username: "commatech",
            password: "1798"
        },
        prod: {
            host: "172.16.10.18",
            port: "22",
            username: "root",
            password: "By1234"
        }
    }
};

// 需要上传到服务器的路径
const staticPath = "/var/www/carrier/build";
const removeCommand = "rm -rf /var/www/carrier/build/*";

const NODE_ENV = process.env.NODE_ENV === "production"; //可以通过cross-env

console.log("NODE_ENV  NODE_ENV NODE_ENV", NODE_ENV, process.env.NODE_ENV);
// 打包  压缩  上传  解压
async function build() {
    return shell.task("npm run build")();
}

async function rmLocalBuild() {
    return shell.task("del build.zip")();
}
function rmService() {
    return gulpSSH.shell([removeCommand], { filePath: "rmService.log" }).pipe(dest("logs"));
}

const gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: NODE_ENV ? config.ssh.prod : config.ssh.dev
});

task("zip", function () {
    return src("./build/**").pipe(GulpZip("build.zip")).pipe(dest("./"));
});

task("unzip", function () {
    return gulpSSH
        .shell([`cd ${staticPath}`, "unzip build.zip"], {
            filePath: "unzip.log"
        })
        .pipe(dest("logs"));
});

task(
    "push-to-service",
    series(
        "zip",
        rmService,
        function () {
            return src(["./build.zip"]).pipe(gulpSSH.dest(staticPath));
        },
        "unzip",
        rmLocalBuild
    )
);

exports.o_Upload = series("push-to-service", (done) => {
    console.log("upload done!");
    done();
});
exports.upload = series(build, "push-to-service");
