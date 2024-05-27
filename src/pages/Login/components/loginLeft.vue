<template>
    <div class="loginLeft">
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" placeholder="用户名" type="number" />
            <!-- :rules="[{ required: true, message: '请填写用户名'}]" -->
            <van-field v-model="password" type="password" name="密码" placeholder="短信验证码" class="loginLeftVerfity">
                <!-- :rules="[{ required: true, message: '请输入短信验证码' }]" -->
                <template #button class="verfityButton">
                    <van-button size="small" @click="getVerfity($event)">
                        <span>{{verfityButtonValue}}</span>
                    </van-button>
                </template>
            </van-field>
            <div>
                <van-button round block type="info" native-type="submit" class="submitButton">登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    export default {
        name: 'loginRight',
        data() {
            let verfityButtonValue = '发送验证码'
            let countdownRunning = false;
            return {
                username: '124523536',
                password: 'sfdsd',
                verfityButtonValue,
                countdownRunning
            };
        },
        methods: {
            onSubmit(values) {
                console.log('submit', values);
            },
            getVerfity(event) {
                event.preventDefault();
                if (this.countdownRunning) {
                    return;
                }
                let time = 60;
                this.countdownRunning = true;
                const countdown = setInterval(() => {
                    this.verfityButtonValue = time + 's';
                    time--;
                    if (time < 0) {
                        clearInterval(countdown);
                        this.verfityButtonValue = '发送验证码'
                        this.countdownRunning = false;
                    }
                }, 1000);
            }
        }
    }
</script>

<style scoped>
    .loginLeft {
        margin-top: 77px;
        width: 100%;
    }

    .loginLeft .van-field {
        margin: 0 auto;
        margin-bottom: 24px;
        padding: 0 24px;
        width: 312px;
        height: 48px;
        line-height: 48px;
        border-radius: 50px;
        background: rgba(245, 255, 248, 1);
        border: 1px solid rgba(54, 151, 81, 1);
        font-size: 16px;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
    }

    .loginLeft .loginLeftVerfity :deep(.van-field__control) {
        display: inline-block;
        width: 100px;
        line-height: 48px;
    }

    /* 验证码按钮 */
    .loginLeft :deep(.van-field__button) {
        margin-left: 64px;
        width: 114px;
        height: 36px;
        border-radius: 50px;
        background: rgba(255, 255, 255, 1);
    }

    .loginLeft :deep(.van-field__button) .van-button {
        transform: translate(-8px, -11.7px);
        width: 114px;
        height: 36px;
        border-radius: 50px;
        background: rgba(255, 255, 255, 1);
    }

    .loginLeft :deep(.van-field__button) .van-button span {
        width: 80px;
        height: 36px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 36px;
        color: rgba(54, 151, 81, 1);
    }

    .loginLeft .submitButton {
        margin: 40px auto 0;
        width: 312px;
        height: 48px;
        border-radius: 50px;
        border: none;
        background: rgba(54, 151, 81, 1);
    }
</style>