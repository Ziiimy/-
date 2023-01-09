<template>
    <div class="login">
        <el-card class="login-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="loginForm" ref="loginForm">
                <el-form-item
                    label="用户名"
                    :rules="[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 4, message: '请输入4-20字符的用户名', trigger: 'blur' },
                    ]"
                >
                    <el-input prop="username" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item
                    label="密码"
                    :rules="[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 12, message: '请输入6-12字符的密码', trigger: 'blur' },
                    ]"
                >
                    <el-input prop="password" type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('loginFrom')"> 登录 </el-button>
                    <el-button type="warning"> 注册 </el-button><el-button type="danger"> 忘记密码 </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    console.log(this.loginForm);
                    /*this.axios
                        .post('https://rapserver.sunmi.com/app/mock/340/login', this.loginForm)
                        .then((res) => {
                            console.log(res);
                            if (res.data.status === 200) {
                                localStorage.setItem('username', res.data.username);
                                this.$message({ message: res.data.message, type: 'success' });
                                this.$router.push('./home');
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });*/
                } else {
                    console.error(this.loginForm);
                }
            });
        },
    },
};
</script>
<style lang="scss">
.login {
    height: 100%;
    width: 100%;
    position: absolute;
    .login-card {
        width: 500px;
        height: 350px;
        margin: 200px auto;
        .el-card__header {
            font-size: 27px;
        }
    }
}
</style>
>
