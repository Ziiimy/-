<template>
    <div class="login">
        <el-card class="login-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="loginForm" ref="loginForm" :rules="rules">
                <el-form-item prop="username" label="用户名">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input type="password" v-model="loginForm.password"></el-input>
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
        const validateName = (rule, value, callback) => {
            let nameRule = /^[\w-]{4,16}$/;
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else if (!nameRule.test(value)) {
                callback(new Error('请输入4-16位包含大小写及数字的用户名'));
            } else {
                callback();
            }
        };
        const validatePwd = (rule, value, callback) => {
            let pwdRule = /^\S*(?=\S{6,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?.])\S*$/;
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (!pwdRule.test(value)) {
                callback(new Error('请输入6-20位包含大小写字母、数字及特殊符号的密码'));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [{ validator: validateName, trigger: 'blur' }],
                password: [{ validator: validatePwd, trigger: 'blur' }],
            },
        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    console.log(this.loginForm);
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
