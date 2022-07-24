# Redmi K30 Pro/POCO F2 Pro(lmi/lmipro)

兜兜转转又回到了原点，从闲鱼上卖掉了自己的 2 部 k30pro，半年后又从其他卖家手里买了不同的版本回来，还真是缘份啊！

## EU 本地化

原本的内容可能有些许过时了，所以重新写一下步骤。另外，欧版 MIUI 开发版已于 2022 年 7 月中旬停止对 K30 Pro 等一众小米两年前发布的机器进行支持了，所以后面会以欧版 MIUI 的稳定版作为基础 ROM（如果稳定版也不再支持的话，那么手机可能会再卖掉，然后买一个支持欧版 MIUI 的小米手机，据 xiaomi.eu ROM 负责人透露，打算对 MTK 的小米手机进行出手，大家可以去支持一下）。

需要准备的文件如下，这些文件可以到对应的 GitHub 或者[这里（密码miui）](https://www.aliyundrive.com/s/TSSYk5Wf8rL)下载。

![](https://github.com/i0Ek3/PlayWithGeekWay/blob/master/image/mod.jpg)

### 具体步骤

- 刷机，刷成 xiaomi.eu Stable ROM
- 刷入 patched recovery
- 重启开机，可以将上述文件先放入手机里，然后安装 Magisk
- 重启开机，进入 Magisk Manager 中刷入本地化 zip 包
  - 这一步仔细阅读刷入说明，开启或关闭哪些功能
- 完成后重启开机，在 Magisk Manager 中安装 LSposed-Zgysik
- 重启开机，在 LSposed 中激活工具箱
- 再一次重启开机即可使用
- 之后需要隐藏 root 和图标以使用国内银行 app
  - 在 Magisk Manager 中刷入 Shamiko，可能需要重启设备
  - 然后进入 Magisk Manager 的设置
  - 开启 Zygisk 以及检查模块中是否开启了 Shamiko，没开启则自行开启
  - Magisk Manager 设置界面点击配置排除列表，根据需要把相关系统应用和第三方 app 选中
  - 测试是否成果，不成功重新操作试试看

===================== 以下内容可能不再适用 ===================

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
- 最后用了一圈下来，还是欧版的 MIUI 13 配合最上面的国产 app 移植最为好用，可能某些银行 app 无法使用（提示手机已经 ROOT），小米做的功能也足够丰富了，文字识别，长截图等。相比 Android 12.1 原生，可玩的更多一些，目前长期使用 MIUI 13 了

## ROM 推荐

- [xiaomi.eu](https://sourceforge.net/projects/xiaomi-eu-multilang-miui-roms/files/xiaomi.eu/)
- [LOS](https://files.sebaubuntu.dev/ROMs/lmi/LineageOS/11/)
- PE
