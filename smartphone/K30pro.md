# Redmi K30 Pro/POCO F2 Pro(lmi/lmipro)

兜兜转转又回到了原点，从闲鱼上卖掉了自己的 2 部 k30pro，半年后又从其他卖家手里买了不同的版本回来，还真是缘份啊！

## EU 本地化

首先感谢[该博主](https://blog.minamigo.moe/archives/184)的工作，我们直接下载对应的模块即可安装，具体安装与刷入顺序请参照下图:

![](https://github.com/i0Ek3/PlayWithGeekWay/blob/master/image/xiaomi.eu_localization.png)

## 把玩记录

- 第一步肯定是解锁了，网上流传的各种方式真的没用，只能耐心等待 168 小时，不同人可能时间不同，推荐使用国际版解锁工具
- 下载刷机包，刷机
    - 可以使用国内的最新稳定版线刷包作为底包，然后再刷入其他第三方 rom
    - xda 寻找第三方包，目前比较好用的也就是 xiaomi.eu 的包和 linageos 18.1 以及 DotOS 5.0了，但 LOS 18.1 实在太丑，最后还是选择了 DotOS 5.0
    - 解密 data 分区，需要下载 2 个附件(已放在根目录下的 lmi 下)刷入，其他的方法不可信，具体链接在[这里](https://forum.xda-developers.com/t/recovery-3-5-1-unofficial-twrp-poco-f2-pro-redmi-k30-pro-lmi.4241707/)
    - twrp 可用上面链接里的，或者 wzsz150 的，都很好，这里给出上面链接的[下载地址](https://sourceforge.net/projects/mbroms/files/TWRPLMI/)
    - 其他注意事项也没啥了，就是指纹实在拉垮，没有开启高刷，60 对我来说足够了
- Android 12 目前已经有开发者适配 lmi 了，让我们躁起来（由于需要长期分享热点，最终还是选择了 xiaomi.eu）
    - [Unofficial PixelExperience](https://forum.xda-developers.com/t/updated-08-12-2021-rom-12-0-twelve-pixel-experience-for-k30-pro-zoom-poco-f2-pro-lmi-lmipro.4275995/) 1206 版的指纹可用，该 ROM 对中国用户来说需要自己设定 APN 才能上网，热点用起来略有瑕疵，双卡用起来不太舒服，设置项里很难调试。
    - [aospa-sapphire](https://forum.xda-developers.com/t/paranoid-android-sapphire-alpha-1-poco-f2-pro.4370679/) 除了 Android 12 的动画和磁贴相比上面的较少以及热点用起来略有瑕疵以外，暂无其他问题。
    - [Official PixelExperience](https://download.pixelexperience.org/lmi) 目前还没有上传。
    - [xiaomi.eu MIUI 12 based Android 12](https://sourceforge.net/projects/xiaomi-eu-multilang-miui-roms/files/xiaomi.eu/MIUI-WEEKLY-RELEASES/) 各种效果并没有展示出 Android 12 的风格，仅仅是底层变为 Android 12，当然相对来说更稳定，不需要设定什么，开箱即用。


## ROM推荐

- [xiaomi.eu](https://sourceforge.net/projects/xiaomi-eu-multilang-miui-roms/files/xiaomi.eu/)
- [DotOS](https://androidfilehost.com/?w=files&flid=322936)
- [LOS](https://files.sebaubuntu.dev/ROMs/lmi/LineageOS/11/)
- [HavocOS](http://download.havoc-os.com/?dir=lmi)
