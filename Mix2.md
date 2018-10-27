# Xiaomi Mix2玩机经验

> 不刷机，不小米。

好吧，我买手机的目的只有一个，刷机。所以最近一直折腾第三方Android 9.0，但仍有各种各样的小问题，所以换回国际版MIUI。一边为了用Google，一边又为了使用小米钱包等服务，所以用[@linusyang92](https://github.com/linusyang92)提供的方法解决了该问题，感谢该同学，顺便也就记录下过程。


## 更新

- 10-27: 尝试在官方国际版下刷入自己提取的1025的文件试试，从目前来看，并不太顺利，手机好像崩了。 



## 过程

- 刷机前先备份数据，一定要备份数据。
- 解锁手机，通过申请官方的解锁工具解锁。
- 刷入第三方Recovery，比如TWRP或者Fox。
- 下载国际版MIUI ROM，可以去[这里](https://github.com/i0Ek3/Funny-ianpasm/tree/master/resource#third-rom)下载，我想en版和波兰版应该都可以。目前在波兰开发版MIUI 10 8.10.11上测试成功，所以以下内容是基于波兰版本的，使用的文件是[@linusyang92](https://github.com/linusyang92)的8.8.9的[Release](https://github.com/linusyang92/mipay-extract/releases)版本。
    - 下载完ROM后，可以自己通过[@linusyang92](https://github.com/linusyang92)提供的[脚本](https://github.com/linusyang92/mipay-extract)自行提取相应的安装包和制作相应的刷机文件，或者Mix2用户也可以直接使用该[Release](https://github.com/linusyang92/mipay-extract/releases)版本。
    - 重启至Recovery界面进行四清，然后刷入波兰版本的ROM，然后在格式化/data分区，再刷入强制加密文件。随后再刷入其他文件。
    - 重启，一切OK。不过有个小小问题，似乎波兰版本的更新器有点问题，总是卡壳，看看8.10.18是否会改善一些。
    - 其他注意事项请查看原repo。



## 参考

- [https://zhuanlan.zhihu.com/p/36370923](https://zhuanlan.zhihu.com/p/36370923)
- [https://github.com/linusyang92/mipay-extract](https://github.com/linusyang92/mipay-extract)





