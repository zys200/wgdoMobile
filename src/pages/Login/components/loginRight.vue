<template>
    <div class="loginRight">
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" placeholder="用户名" />
            <!-- :rules="[{ required: true, message: '请填写用户名' }]"  -->
            <van-field v-model="password" :type="passwordType" name="密码" placeholder="密码"></van-field>
            <!-- :rules="[{ required: true, message: '请填写密码' }]" -->
            <div class="icons" @click="showPassword">
                <i class="iconfont icon-xianshimima"></i>
            </div>
            </van-field>
            <div class="submitButton">
                <van-button round block type="info" native-type="submit">{{ $t('login.sign') }}</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
    name: 'loginRight',
    data() {
        let passwordType = 'password'
        return {
            username: '124523536',
            password: 'sfdsd',
            passwordType
        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        showPassword() {
            this.passwordType = this.passwordType === 'password' ? '' : 'password'
        }
    }
}
</script>

<style scoped>
.loginRight {
    margin-top: 77px;
    width: 100%;
}

.loginRight .van-field {
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

.loginRight .icons {
    display: block;
    transform: translate(290px, -90px) scale(1.5);
    width: 24px;
    height: 16px;
    line-height: 50px;
    color: rgba(204, 204, 204, 1);
    border: 1px solid hidden;
}

.loginRight .submitButton .van-button {
    margin: 0 auto 0;
    width: 312px;
    height: 48px;
    border-radius: 50px;
    border: none;
    background: rgba(54, 151, 81, 1);
}
</style>