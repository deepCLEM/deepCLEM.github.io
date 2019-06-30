import React, { PureComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import _ from "lodash";
import { SocialIcon } from "react-social-icons";

import ActionFooter from "../components/ActionFooter";
import SpeakerFeature from "../components/SpeakerFeature";
import Modal from "../components/Modal";
import ModalContentSpeakers from "../components/ModalContentSpeakers";
import ModalContentSchedule from "../components/ModalContentSchedule";
import TableRow from "../components/TableRow";


import "./styles.css";

export default class App extends PureComponent {
  state = { showModal: false, whichDay: "day_1" };

  sechdule = {
    day_1: [
      {
        id: _.uniqueId(),
        start: "9:00",
        end: "9:30",
        rest: "報到 (地點: 正大會議廳)"
      },
      {
        id: _.uniqueId(),
        start: "9:30",
        end: "9:50",
        rest: "開場 (地點: 正大會議廳)"
      },
      {
        id: _.uniqueId(),
        start: "9:50",
        end: "10:40",
        talks: [
          {
            id: _.uniqueId(),
            topic: "那些年被蘋果 ban 掉的 API",
            presenter: "zonble",
            description: "介紹 iOS 的 API 歷史"
          },
          {}
        ]
      },
      {
        id: _.uniqueId(),
        start: "10:50",
        end: "11:20",
        talks: [
          {
            id: _.uniqueId(),
            topic: "掀起 Swift 的小裙子",
            presenter: "Pofat",
            description: "讓我們一起開始看透 Swift 的內在"
          },
          {
            id: _.uniqueId(),
            topic: "Siri Shortcut 的 OTT 應用",
            presenter: "Mars",
            description:
              "介紹 SiriKit / 介紹 Siri Shortcut / 如何應用到 OTT app / 開發經驗分享"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "11:30",
        end: "12:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Scripting in Swift",
            presenter: "Marcus Wu",
            description:
              "在Apple 大力推廣Swift 的時代，Swift 不只能用於iOS App 之上，更可以幫助工程師撰寫CLI 工具來加速工作流程。本議程將會分享如何透過Swift 撰寫Linux 可執行檔，並透過Homebrew 發布讓世界各地的人方便安裝使用。"
          },
          {
            id: _.uniqueId(),
            topic: "Dirty Code 凋零的程式碼",
            presenter: "Jason",
            description:
              "聽過Jungle Pattern嗎？覺得 WTF/min 不夠高嗎？寫code 寫的心平氣和渾身舒暢？那你一定要來聽聽Dirty Code 凋零的程式碼。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "12:00",
        end: "13:00",
        rest: "午餐 (地點: B101)"
      },
      {
        id: _.uniqueId(),
        start: "13:00",
        end: "13:30",
        talks: [
          {
            id: _.uniqueId(),
            topic: "從 0 到 1 的距離，我與 tvOS 的邂逅",
            presenter: "徐嘉駿 Toby Hsu",
            description:
              "分享 Apple TV App 的開發與使用者體驗設計的愛恨情仇。 究竟，iOS 與 tvOS 差在哪裡，Mobile 跟 TV 上又有什麼不一樣呢？ 讓我們繼續看下去⋯⋯🤔"
          },
          {
            id: _.uniqueId(),
            topic: "Swift 與 ObjC：當我們同在一起其痛苦無比",
            presenter: "Tina Chang",
            description:
              "專案混用 Swift 與 Objective-C 時遇到的雷與對應解決方法"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "13:35",
        end: "14:05",
        talks: [
          {
            id: _.uniqueId(),
            topic: "IoT Debugging",
            presenter: "Su PingChen",
            description:
              "使用 OSLog 在 iOS framework 開發以及除錯。在 iOS 該如何開發 IoT 服務，以及該如何除錯。當問題提升到跨平台層級時，該如何釐清。"
          },
          {
            id: _.uniqueId(),
            topic: "iOS 逆向工程、越獄 Tweak 開發與雜談",
            presenter: "Gary niL",
            description:
              "iOS 越獄（Jailbreak）是獲取 iOS 設備的 Root 權限的一個技術。 通過一些越獄工具可以完成越獄前不可能進行的動作，例如安裝 App Store 以外未經過簽名的 Apps、修改 SpringBoard 安裝主題、運行 Tweak 或 Shell 程式。對於開發者來說，越獄後的設備就能夠 hook 進 iOS 系統中所有的 class，來更改或控制一些 iDevice 的內建功能。而越獄社群中也有類似 App Store 的生態，開發者們透過 theos 開發工具開發 tweak 並上架到 Cydia Store 中提供給使用者安裝使用，這些 Tweak 都依賴一個叫 Cydia Substrate 的動態連結函式庫，它的主要功能是提供方法 hook 某個 App，修改程式碼或替換其中的 method 實作。 在本次的主題中，將會簡單介紹如何開發一個簡易的 iOS Tweak，並將這個 Tweak 部署到 iOS 設備上: 工具，環境介紹 / Hello World 一個簡單的 Tweak / Tweak 部署 / Tweak 可以做什麼？"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "14:10",
        end: "14:40",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Test Code、Test UI、Test EveryThing !!!",
            presenter: "AKI YU",
            description:
              "如果你有如下的疑問，那麼可能在這個議程裡，你將可以更進一步獲得了解這些問題的本質: 與PM或是非技術人員溝通需求有困難？ / 什麼是行為趨動開發(BDD)、什麼是實例化需求(SBE)? / 書上寫的單元測試，看起來都很簡單，但實務上又下不了手 / 什麼是測試趨動開發(TDD) / Coverage 100% 是不是代表程式品質很好？ / 談測試的品質 / 誰來寫 UI Test ? / 工程師 --- iOS UI Testing Bundle / QA --- Appium、calabash / 有沒有不會寫程式 又不懂 XCode 的人用的UI測試程式？ / 用Mac APP做一個測試機器人吧"
          },
          {
            id: _.uniqueId(),
            topic: "從RESTful API到GraphQL",
            presenter: "丁沛堯",
            description:
              "什麼是GraphQL？ 為什麼要用GraphQL？ ~~因為Facebook的大大們在用啊~~ RESTful不好嗎？ ~~對，RESTful不好~~。 在這個talk中會跟大家介紹GraphQL、如何在iOS系統應用GraphQL，然後聊聊我在產品中實際採用GraphQL後的辛酸血淚史，以及GraphQL的優缺點。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "14:45",
        end: "15:15",
        talks: [
          {
            id: _.uniqueId(),
            topic: "WWDC18 Core ML 相關 Sessions 濃縮呈現",
            presenter: "Marvin Lin",
            description:
              "將 WWDC18 中，把 Core ML 設為主題的 sessions 重點濃縮成一個 talk。這些 Sessions 主要有下列幾點，輸出 ML 模組的 Create ML， Core ML 中新加入的功能 (WWDC18 這花了兩個 sessions 的時間)，自然語言的 framework，Vision framework 中的目標追綜，Core ML 中的機器視覺功能。"
          },
          {
            id: _.uniqueId(),
            topic: "Life of A Cell",
            presenter: "John Lin",
            description: "講解 CollectionView 的生命週期"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "15:20",
        end: "15:50",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Swift 也能訓練 Machine Learning 模型？Create ML 實戰",
            presenter: "張景隆",
            description:
              "Introducing Create ML / Define your GOAL / Data pre-processing / Find the best model (Training & Evaluating) / Make it real on the iPhone"
          },
          {
            id: _.uniqueId(),
            topic: "Refactor:從MVC到Redux",
            presenter: "Jeff Lin",
            description:
              "MVC是大家在App開發所熟知的Design Pattern。近年廣受Web使用的Redux架構一樣也可以應用在iOS App開發上。我們將用一個簡單的範例，把原先的MVC轉換成Redux，並探討什麼元件可以獨立起來。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "16:00",
        end: "17:00",
        rest: "Lightning Talk (地點: 正大會議廳)"
      }
    ],
    day_2: [
      {
        id: _.uniqueId(),
        start: "9:00",
        end: "9:20",
        rest: "開場 (地點: 正大會議廳)"
      },
      {
        id: _.uniqueId(),
        start: "9:20",
        end: "10:10",
        talks: [
          {
            id: _.uniqueId(),
            topic: "struct Drift : Bicycle, Swift",
            presenter: "藍永倫",
            description: "利用Swift和腳踏車，自幹一套類似Zwift的遊戲。"
          },
          {}
        ]
      },
      {
        id: _.uniqueId(),
        start: "10:20",
        end: "10:50",
        talks: [
          {
            id: _.uniqueId(),
            topic: "給 iOS 初心者的求職策略",
            presenter: "Enid Tian",
            description:
              "近年隨著 Apple 推出親切友善的 Swift 語言，吸引不少程式新手或轉職者投入 iOS 開發領域，但新手如何才能達到業界標準、找到心目中理想的工作呢？本場分享將以 AppWorks School 與業界合作的經驗，分享新手該建立起哪些核心觀念、技能，才能成為廣受業界青睞的工程師。"
          },
          {
            id: _.uniqueId(),
            topic: "Core Animation vs. SpriteKit",
            presenter: "Luke Wu 伍智瑋",
            description:
              "在 iOS 裡提到動畫效果，Core Animaton 是最常用被使用的。但 Apple 其實在 2D 動畫還有出了一套叫做 SpriteKit 的 Framework。這次就一些複雜動畫場景，就 Core Animation 與 SpriteKit 的實作與效能，做一些比較與分析。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "10:55",
        end: "11:25",
        talks: [
          {
            id: _.uniqueId(),
            topic: "Design Patterns in XCUITest",
            presenter: "Vivian Liu",
            description:
              "如何使用 Design Pattern 來改善 XCUITest 的可維護性與擴充性。以及在測試涵蓋率增加後，如何減少測試時間並保持測試穩定性。如果你只能選一場 Talk 聽，這絕對不會是你想錯過的那場，我們將不保留的公開箇中秘訣。"
          },
          {
            id: _.uniqueId(),
            topic: "APP Girls創辦人教你如何跨越程式高牆-開發經驗與自學經驗分享",
            presenter: "鄭雅方",
            description:
              "分享APP Girls創辦, 開發經驗, 職涯經驗以及自學經驗等等，歸納出任何自學的重要元素與方法，並鼓勵女生也可以寫程式，靠自己的力量做自己想要做的事情！"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "11:30",
        end: "12:00",
        talks: [
          {
            id: _.uniqueId(),
            topic: "英國iOS Developer開發經驗",
            presenter: "Allen Wang",
            description: "英國工程師的薪水，稅制，福利；用的技術，團隊。"
          },
          {
            id: _.uniqueId(),
            topic: "如何使用 Dependency Injection 提高 iOS App 的可測試性",
            presenter: "Elvis Lin",
            description:
              "在大型專案的開發中，很容易把程式碼變得複雜、臃腫、難以維護。在本演講中，會說明什麼是可測試性，以及當你套用 MVVM 之後，你應該要如何使用 dependency injection 讓程式的可測試性更好。最後會用手動注入、Swinject 與 Cleanse 說明實務上要如何撰寫。"
          }
        ]
      },
      {
        id: _.uniqueId(),
        start: "13:00",
        end: "17:00",
        rest: "Party (地點: 後台咖啡)"
      }
    ]
  };

  speakers = [
    {
      id: _.uniqueId(),
      imgURL:
        "https://pbs.twimg.com/profile_images/277613359/113d17e2e1f_400x400.jpg",
      alt: "",
      name: "OneVCat",
      position: "",
      intro:
        "onevcat is a senior software development engineer at LINE, work on LINE SDK and well-known open source library - Kingfisher."
    },
    {
      id: _.uniqueId(),
      imgURL:
        "https://pbs.twimg.com/profile_images/2904865970/141f9a79f4c6fafd0c645e8609e3d295_400x400.jpeg",
      alt: "",
      name: "Zonble",
      position: "",
      intro:
        "Zonble is a senior iOS engineer at KKBOX, often participate in technical community, created a public git book “KKBOX iOS/MacOS X 基本開發教材”. Sharing the development experience on flutter recently."
    }
  ];

  staff = [
    {
      id: _.uniqueId(),
      name: "Hokila",
      imgURL:
        "https://pbs.twimg.com/profile_images/889516896004882432/c3sdNWS9_400x400.jpg",
      position: "iOS Evangelist / Trello Lover/ Father",
      SNS: "https://www.facebook.com/profile.php?id=100002142768087"
    },
    {
      id: _.uniqueId(),
      name: "Hanyu Chen",
      imgURL: require("../images/tGm55idg.png"),
      position: "iOS Developer",
      SNS: "https://www.facebook.com/hanyu.chen.518"
    },
    {
      id: _.uniqueId(),
      name: "John Lin",
      imgURL: "https://avatars3.githubusercontent.com/u/529248?s=460&v=4",
      position: "Swift Taipei Organizer",
      SNS: "https://twitter.com/johnlinvc"
    },
    {
      id: _.uniqueId(),
      name: "ethanhuang13",
      imgURL:
        "https://s.gravatar.com/avatar/61a2325aa2033a3d43c8edfb43718562?s=200",
      position: "iOS Dev @ CATCHPLAY",
      SNS: "https://twitter.com/ethanhuang13"
    },
    {
      id: _.uniqueId(),
      name: "Hao Lee",
      imgURL:
        "https://s.gravatar.com/avatar/482ac461ed40d8e43a19f8897069f018?s=200",
      position: "Software Engineer at DYLAN-TEK CO., LTD.",
      SNS: "https://twitter.com/twhaolee"
    },
    {
      id: _.uniqueId(),
      name: "Welly",
      imgURL: require("../images/meme.png"),
      position: "F2E at KKStream",
      SNS: "https://github.com/WellyShen"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/10636419_10203880244832112_3086301521967770082_o.jpg"),
      name: "Joe Chen",
      position: "Software Engineer",
      SNS: "#"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/Hanpo_Avatar.jpg"),
      name: "Hanpo",
      position: "UI Design Engineer at KeyXentic",
      SNS: "https://www.facebook.com/hanpo.tw"
    },
    {
      id: _.uniqueId(),
      imgURL: "https://avatars1.githubusercontent.com/u/59567?s=460&v=4",
      name: "Superbil",
      position: "Software Freelance",
      SNS: "https://twitter.com/superbil"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/14362711_1443783055638586_3924866533217962148_o.jpg"),
      name: "Dada",
      position: "iOS Developer at KKBOX",
      SNS: "https://twitter.com/nalydadad"
    }
  ];

  sponors = [
    {
        id: _.uniqueId(),
        imgURL: require("../images/logo_esun.png"),
        link: "https://www.esunbank.com.tw/",
        alt: "Esun Bank",
        degree: "黃金贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_dcard.png"),
      link: "https://www.dcard.tw/",
      alt: "Dcard",
      degree: "黃金贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_pic-collage.png"),
      link: "https://cardinalblue.com/",
      alt: "Cardinal Blue",
      degree: "白銀贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_ichef.jpeg"),
      link: "https://www.ichefpos.com/zh-tw",
      alt: "iChef",
      degree: "白銀贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_catchplay.png"),
      link: "https://www.catchplay.com/tw",
      alt: "Catch Play",
      degree: "青銅贊助"
    },
    {
        id: _.uniqueId(),
        imgURL: require("../images/logo_keyxentic.png"),
        link: "https://www.keyxentic.com/",
        alt: "KeyXentic",
        degree: "青銅贊助"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_5xruby.tw.png"),
      link: "https://5xruby.tw/",
      alt: "5xRuby",
      degree: "設備贊助"
    }
  ];

  partyEvents = [
    {
      id: _.uniqueId(),
        start: "13:00",
        end: "13:40",
        rest: "用餐時間"
    },
    {
      id: _.uniqueId(),
        start: "13:40",
        end: "14:40",
        rest: "PANEL 1"
    },
    {
      id: _.uniqueId(),
        start: "14:40",
        end: "15:00",
        rest: "中場休息"
    },
    {
      id: _.uniqueId(),
        start: "15:00",
        end: "16:00",
        rest: "PANEL 2"
    },
    {
      id: _.uniqueId(),
        start: "16:00",
        end: "17:00",
        rest: "自由時間"
    },
  ]

  coOrganisers = [
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_cocoaheads_taipei.png"),
      link: "https://www.facebook.com/groups/cocoaheads.taipei/",
      alt: "Cocoaheads Taipei"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_iOS_taipei.png"),
      link: "https://www.facebook.com/groups/ios.taipei/",
      alt: "iOS Taipei"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_swift_taipei.png"),
      link: "https://www.meetup.com/Swift-Taipei-User-Group/",
      alt: "Swift Taipei"
    },
    {
      id: _.uniqueId(),
      imgURL: require("../images/logo_swift_girls.png"),
      link: "https://www.facebook.com/groups/1260405513988915/",
      alt: "Swift Girls"
    }
  ];

  onClickSpeaker = id => {
    this.modalContentDataSpeakers = _.find(this.speakers, { id });
    this.setState({ showModal: "speakers" });
  };

  onClickTopic = talk => {
    this.modalContentDataSchedule = talk;
    this.setState({ showModal: "schedule" });
  };

  onCloseRequest = () => {
    this.setState({ showModal: false });
  };

  renderTableRow = () =>
    _.map(
      this.sechdule[this.state.whichDay],
      ({ id, start, end, rest, talks }) => (
        <TableRow
          key={id}
          start={start}
          end={end}
          rest={rest || null}
          talks={talks}
          onClickTopic={talk => {
            this.onClickTopic(talk);
          }}
        />
      )
    );

  renderSpeakers = () =>
    _.map(this.speakers, ({ id, imgURL, alt, name, position }) => (
      <div key={id} className="app__speaker">
        <img
          className="app__speaker-img"
          onClick={() => this.onClickSpeaker(id)}
          src={imgURL}
          alt={alt}
        />
        <p className="app__speaker-name">
          <strong>{name}</strong>
        </p>
        <p className="app__speaker-position">{position}</p>
      </div>
    ));

  renderPartyEventRow = () =>
    _.map(
      this.partyEvents,
      ({ id, start, end, rest }) => (
        <TableRow
          key={id}
          start={start}
          end={end}
          rest = {rest || null}
        />
      )
    );

  renderStaff = () =>
    _.map(this.staff, ({ id, imgURL, alt, name, position, SNS }) => (
      <a key={id} href={SNS} target="_blank">
        <div className="app__speaker">
          <img className="app__speaker-img" src={imgURL} alt={alt} />
          <p className="app__speaker-name">
            <strong>{name}</strong>
          </p>
          <p className="app__speaker-position">{position}</p>
        </div>
      </a>
    ));

  renderSponsors = () =>
    _.map(this.sponors, ({ id, imgURL, link, alt, degree }) => (
      <div key={id} className="app__sponsor">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="app__sponsor-logo" src={imgURL} alt={alt} />
          <div className="app__sponsor-degree">{degree}</div>
        </a>
      </div>
    ));

  renderCoOrganisers = () =>
    _.map(this.coOrganisers, ({ id, imgURL, link, alt }) => (
      <div key={id} className="app__sponsor">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="app__sponsor-logo" src={imgURL} alt={alt} />
        </a>
      </div>
    ));

  render() {
    const { whichDay, showModal } = this.state;
    const mailChimpURL =
      "https://iplayground.us17.list-manage.com/subscribe/post?u=61bc80c5d8118e451c9a5ac80&amp;id=b804a3d8e0";

    return (
      <div className="app-fullscreen">
        <div className="logo-container-fullscreen">
          <div className="logo-container">
            <img
              className="logo"
              src={require("../images/logo_iplayground.png")}
              alt="iPlayground"
            />
            <p className="logo-info">
            <i className="fas fa-map-marker-alt"></i>
                  台大博雅館
              <br/>
              9/21-9/22
            </p>
          </div>
          <div className = "logo-container-fullscreen-mask"></div>
        </div>
        <div className="app__container">
          <div className="app__section">
            <div className="app__title">Keynote Speakers</div>
            <div className="app__speaker-container">
              {this.renderSpeakers()}
            </div>
          </div>
          <div className="app__section">
            <div className="app__title">關於 iPlayground</div>
            <p>
              2017年9月，一群到東京參加 <a href="https://iosdc.jp/2017/" target="_blank">iOSDC</a> 的工程師們，在看到國外蓬勃活躍的程式力，熱血自此被點燃，決心舉辦一場兼具廣深度又有趣的 iOS 研討會。
            </p>
            <p>
              2018年10月，有實戰技巧、初心者攻略、hard core 議題以及各式八卦政治學的 iPlaygrouond 華麗登場。
            </p>
            <p>
              2019年，iPlayground 誠摯召喚各位鍵盤好手一起來燃燒熱血，讓議程更多元、更有料！
            </p>
          </div>
          <div className="app__section">
            <div className="app__title">投稿指南</div>
            <p>
              iPlayground 接受任何與 iOS/macOS，Objective-C/Swift 開發相關的各式議題，包括軟體架構、測試技巧或者iOS政治學等，想必此刻在螢幕前的你就是想要來投稿的，那就不要再猶豫了！
            </p>
            <p>
              今年對於 iOS 開發者來說可能是非常重要的一年， Swift 迎來 ABI 穩定以及 iOS 能夠更簡易地移植到 macOS 上，有更多的可能性即將發生，若你有任何特別的開發經驗，比如 backend 或 WebAssembly，我們都邀請你投稿到 iPlayground，或者是你有許多帶人的經驗或有強烈傳道授業的渴望，也歡迎來投稿我們的 workshop，你將在 workshop 裡手把手地帶其它人一起成長。
            </p>
            <p>
              俗話說得好，一個人固然可以走得快，一群人才能走得遠，讓我們共同努力，走向國際。
            </p>
          </div>
          <div className="app__section">
            <div className="app__title">時程</div>
            <div className="section_center_content">
              <p>
                2019.06.10 ・ 開放投稿
              </p>
              <p>
                2019.08.10 ・ 投稿截止
              </p>
              <p>
                2019 8月 ・ 公佈結果
              </p>
              <p>
                2019.09.21－2019.09.22 ・ 議程時間
              </p>
            </div>
          </div>
          <div className="app__section">
            <div className="app__title">身為講者</div>
            <div className="section_content_row_container">
              <SpeakerFeature title="一般議程" content={
                "身為一個講者，議程長度約為 40 分鐘，你需要準備至少 30 分鐘的演講內容，並請保留 5 分鐘的時間給聽眾提問，為了讓你和聽眾在議程時有良好的互動和體驗，我們準備了講者建議與須知"
              } />
              <SpeakerFeature title="Workshop" content={
                "同一般講程，我們對 Workshop 的主題並不設限，其時間長度為半天或一整天，相當於 3 或 6 小時的課程。你需要準備一個連貫的主題和可以實作的教學內容帶著學員們一起實作學習。"
              } />
              <SpeakerFeature title="優惠" content={
                "身為講者可以免費獲得一張自己的入場卷以及驚喜優惠。"
              } />
            </div>
          </div>
          <div className="app__section">
            <div className="app__title">現在就應徵</div>
            <div className="section_center_content">
              <p>
                我們將採取匿名審稿制度來評審，歡迎下列主題投稿
              </p>
              <p>
                - Objective-C / Swift framework 使用心得分享<br/>
                - iOS / Mac 軟體開發經驗分享<br/>
                - AR / Metal 等開發經驗分享<br/>
                - 遊戲開發經驗分享<br/>
                - 軟體架構規畫或使用經驗分享<br/>
                - UI Test / Unit Test / Refactor 軟體品質經驗分享<br/>
                - UI / UX 設計經驗分享<br/>
                - Agile / Scrum 經驗心得分享<br/>
                - SwiftUI / Combine 入門心得分享<br/>
                - Swift for backend、command line 或 TensorFlow 等其它開發經驗分享<br/>
              </p>
            </div>
          </div>
        </div>
        <ActionFooter />
        <Modal visible={showModal} onCloseRequest={this.onCloseRequest}>
          {showModal === "speakers" ? (
            <ModalContentSpeakers
              {...this.modalContentDataSpeakers}
              onClickCloseBtn={this.onCloseRequest}
            />
          ) : (
            <ModalContentSchedule
              {...this.modalContentDataSchedule}
              onClickCloseBtn={this.onCloseRequest}
            />
          )}
        </Modal>
      </div>
    );
  }
}