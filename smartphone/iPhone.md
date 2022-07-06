# iPhone 使用经验

> iP12PM 已出二手，卖给了线下的贩子，给了我 4700 RMB，用了差不多一年半多，还算可以吧，然后我又用回了我的 lmi。

平生第一次使用 iPhone，好奇 iOS 到底是何许机也，故作此记录，在这里记录下我的使用经验和一些问题。

手机回来后，还是要检查包装是否正常，拆机后检查手机机身是否 ok，我总是过于小心翼翼，因为这是我购买手机的必要流程。

## 关于激活

以前一直以为只要插卡激活了 iPhone，你的手机就永远的被激活了，就不能退货了，事实上我太天真了。苹果官网的手机都是可以 14 天无理由退货的，激活了也没有关系，可以抹掉的嘛。至于苹果官网会不会销售二手的 iPhone，无从考证。只是给我寄回来的手机上的封膜有严重的折痕和污染痕迹，好在手机看起来并无大碍。

## 信息查看

手机激活进入主界面后，可以连接爱思助手检查手机信息状况，如出厂日期，激活时间，充电次数，屏幕材质等一系列信息。

## iPhone 优点

- 手机是真的很薄，重量倒也还可以，双手把握没什么问题，略重
- 相机是真的强，虽然对我这种不怎么拍照的人来说相机几乎无用，但确实强
- 整体流畅度还是非常好的，反应速度也很快，虽然 Android 也很流畅，但是两种不同的感觉
- 综合生态很强，和 macOS 很搭
- 如果有，后面继续补充

## iPhone 缺点

- 硬件缺点：刷新率不够，屏幕素质，但问题不是太大，毕竟我的安卓机也只有 60 Hz
- Apple Store 的 app 不够完善，很多安卓上的 app 都没有，比如 xda
- 美区苹果 ID 注册略为繁琐，与国区账号不通用，应用下载不通畅
- 手势操作确实不如 Android 优秀，依旧只能左上角返回。可定制化也不如 Andoird 优秀，但也还行吧
- 苹果那个通知系统，实在是让我头大，微信那个圈圈转啊转的，烦死了
- 如果有，后面继续补充

## 常用 App

这里记录下 iPhone 上常用的 App，后面继续补充。

- Telegram, Twitter, Instagram
- Reddit, Medium, Quora, Wikipedia, wikiHow
- Researcher, Mendeley, Brilliant
- Pocket, Standard Notes, Trello, Microsoft To Do
- YouTube, Google Voice, Gmail, Authenticator
- Protonmail
- Inoreader, Octal
- Spectre
- Safari, Brave, Firefox
- GitHub, v2ex, LeetCode, GeekTime
- iSH, IFTTT, col.or, TestFlight
- Bilibili, NetEaseMusic, Spotify, Headphones
- Mr.Translator, Linguee, DeepL
- Maps.me
- aDrive

## App 安装

除了可以通过 Apple Store 和其他助手安装软件以外，iPhone 也可以像安卓手机那样通过命令行来安装软件，参考如下，平台为 macOS，需先安装 ideviceinstaller 这个软件。

```Shell
alias ii='ideviceinstaller' 
alias iii='ideviceinstaller -i' # install ipa
alias idev='idevice_id -l'
alias iu='ideviceinstaller -U'
alias ilog='idevicesyslog'
alias icut='idevicescreenshot'
alias idi='ideviceinfo'
```

## 可设置项

iPhone 的可设置项不是很多，不像 Android 有开发者模式，但总的来说也不需要特别复杂的设置，除了设置 Apple Store 以防每次下载都需要输入密码以外（并不建议所有人都这么设置）。

你可能需要先登录电脑上的苹果账号，然后在设置里的左上角的 AppleID 那里设置关掉密码验证。因为但从手机上进行设置，并不能真正的关闭密码验证。

## 其他

其他的可以参考这个[仓库 awesome-ios](https://github.com/vsouza/awesome-ios)。
