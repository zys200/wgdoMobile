<template>
    <div class="box">
        <div class="email">
            <div class="eleft">
                <i class="iconfont icon-iconfontemail"></i>
            </div>
            <div class="eright">
                <div>Email</div>
                <div>info@wgdo.net</div>
            </div>
        </div>
        <div class="tell">
            <div><i class="iconfont icon-zuoji"></i></div>
            <div class="tel">
                <div>T. (86) 10 83681587. 15801587585.</div>
                <div>F. (86) 10 83681553 </div>
            </div>
        </div>
        <div class="address">
            <i class="iconfont icon-weizhi"></i>
            <span>{{ $t('footer.dizhi') }}</span>
        </div>
        <div class="rights">
            <div class="weixin">
                <i class="iconfont icon-weixin"></i>
                <span>15801587585</span>
            </div>
            <div class="facebook">
                <i class="iconfont icon-facebook-fill"></i>
                <span>(86) 10 83681587</span>
            </div>
        </div>
        <div class="line">
            <span>{{ $t('footer.jing') }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footers',
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    padding-left: 20px;
    background: rgba(166, 225, 99, 1);
    overflow: hidden;
}

.email {
    display: flex;
    margin-top: 22px;
}

.email .eleft {
    position: relative;
    top: 0;
    width: 33px;
    height: 32px;
    border: 2px solid rgba(51, 51, 51, 1);
    border-radius: 50%;
}

.email i {
    position: absolute;
    left: 3px;
    top: 5.5px;
    width: 19.28px;
    height: 14.02px;
    transform: scale(.8);
    color: rgba(51, 51, 51, 1);
}

.email .eright {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
}

.email .eright div:first-child {
    width: 36px;
    height: 16px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 15.91px;
    color: rgba(51, 51, 51, 0.8);
    text-align: left;
}

.email .eright div:last-child {
    width: 114px;
    height: 19px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 18.56px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
}

/* tell */
.tell {
    position: relative;
    margin-top: 19px;
    display: flex;
}

.tell div:first-child {
    height: 14px;
}

.tell div:first-child i {
    position: absolute;
    top: 0;
    width: 9.99px;
    height: 8.53px;
    transform: translateY(-1px) scale(.7);
    color: rgba(51, 51, 51, 1);
}

.tell div:last-child div {
    margin-left: 22.53px;
    height: 14px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 13.26px;
    color: rgba(51, 51, 51, 0.8);
    text-align: left;
}

/* address */
.address {
    margin-top: -9px;
    width: 200px;
    height: 14px;
}

.address i {
    display: inline-block;
    width: 7.46px;
    height: 7.11px;
    color: rgba(51, 51, 51, 1);
    transform: scale(.7) translateY(5.5px);
}

.address span {
    margin-left: 14px;
    margin-top: -17px;
    height: 14px;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 13.26px;
    color: rgba(51, 51, 51, 0.8);
    text-align: left;
    display: flex;
}

/* rights */
.rights {
    position: relative;
    top: -49.5px;
    left: 220px;
    width: 130px;
    height: 14px;
}

.rights i {
    display: inline-block;
    width: 10.38px;
    height: 8.36px;
    transform: scale(.9) translateY(2.5px);
    color: rgba(51, 51, 51, 1);
}

.rights .weixin {
    transform: translateY(11px);
}

.rights span {
    margin-left: 12px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 13.26px;
    color: rgba(51, 51, 51, 0.8);
    text-align: left;
}

.line {
    margin-top: 20px;
    width: 100vw;
    height: 50px;
    border: 1px solid rgba(105, 120, 131, 0.16);
    border-bottom: none;
    transform: translateX(-20px);
}

.line span {
    display: inline-block;
    width: 100%;
    height: 34px;
    text-align: center;
    left: 132px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 13.26px;
    color: rgba(51, 51, 51, 0.8);
}
</style>