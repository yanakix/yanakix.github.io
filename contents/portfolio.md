<div class="portfolio-container">
  <!-- 2D Metroidvania Demo -->
  <div class="portfolio-item">
    <h3 class="portfolio-title">
      <i class="bi bi-chevron-right"></i>
      <span class="project-status status-ongoing">已完成</span>
      <span class="project-date">2025年10月 - 2026年1月</span>
      2D Metroidvania Demo 2D类恶魔银河城小游戏
    </h3>
    <div class="portfolio-content">
      <div class="portfolio-links">
        <a href="https://github.com/yanakix/AdventureWithUnity" class="github-link" target="_blank">
          <i class="bi bi-github"></i> 前往GitHub仓库
        </a>
      </div>
      <div class="portfolio-description">
        <p>自学 Unity 引擎的 2D 横版动作游戏项目</p>
      </div>
      <!-- 技能树系统 -->
      <div class="feature-section">
        <h4 class="feature-title">技能树系统</h4>
        <p class="feature-description">
          • 包含多个技能的技能树系统，支持游戏内实时升级技能树
          <br>
          • 由json实现技能树数据持久化存储
        </p>
        <div class="single-video">
          <div class="video-item">
            <video 
              src="static/assets/video/2DMetroidvaniaDemo/SkillTree.mp4"
              autoplay loop muted playsinline
              class="portfolio-video featured-video"
            ></video>
            <p class="video-caption">技能树界面</p>
          </div>
        </div>
      </div>
      <!-- 移动系统 -->
      <div class="feature-section">
        <h4 class="feature-title">移动系统(方便展示关闭了UI，下同)</h4>
        <p class="feature-description">
          • 基于状态机实现角色移动系统（跑动 / 冲刺 / 贴墙滑行 / 滑铲）<br>
          • 不同状态之间通过条件切换，减少复杂分支判断
        </p>
        <div class="four-images">
          <div class="video-item">
            <video 
              src="static/assets/video/2DMetroidvaniaDemo/Movement_Run.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">基础奔跑</p>
          </div>
          <div class="video-item">
            <video 
              src="static/assets/video/2DMetroidvaniaDemo/Movement_Dash.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">冲刺</p>
          </div>
          <div class="video-item">
            <video 
              src="static/assets/video/2DMetroidvaniaDemo/Movement_WallSlide.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">贴墙滑行</p>
          </div>
          <div class="video-item">
            <video 
              src="static/assets/video/2DMetroidvaniaDemo/Movement_SlidingTackle.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">滑铲</p>
          </div>
        </div>
      </div>
      <!-- 攻击系统 -->
      <div class="feature-section">
        <h4 class="feature-title">攻击系统</h4>
        <p class="feature-description">
          • 攻击系统基于状态机实现<br>
          • 实现基础连击系统（最多三段）与弹反机制<br>
          • 已经实现配套的数值系统及对应的UI<br>
          • 通过动画的Event来触发攻击判定，并转到数值系统进行对应计算和UI显示
        </p>
        <div class="two-images">
          <div class="video-item">
            <video 
              src="static/assets/video/2DMetroidvaniaDemo/Attack_PrimaryAttack.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">普通攻击（至多三段）</p>
          </div>
          <div class="video-item">
            <video 
              src="static/assets/video/2DMetroidvaniaDemo/Attack_CounterAttack.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">弹反</p>
          </div>
        </div>
      </div>
      <!-- 技能系统 -->
      <div class="feature-section">
        <h4 class="feature-title">技能系统</h4>
        <p class="feature-description">
          • 两个基类Skill和SkillController搭建起整个技能框架<br>
          • 通过SkillManager类管理所有技能，并为后续的技能树系统铺垫<br>
          • 已实现投掷类技能、水晶技能与终极技能
        </p>
        <div class="skill-subsection">
          <h5 class="skill-subtitle">掷剑技能</h5>
          <div class="three-images">
            <div class="video-item">
              <video 
                src="static/assets/video/2DMetroidvaniaDemo/Skill_ThrowSword_1.mp4"
                autoplay loop muted playsinline
                class="portfolio-video"
              ></video>
              <p class="video-caption">掷剑技能1</p>
            </div>
            <div class="video-item">
              <video 
                src="static/assets/video/2DMetroidvaniaDemo/Skill_ThrowSword_2.mp4"
                autoplay loop muted playsinline
                class="portfolio-video"
              ></video>
              <p class="video-caption">掷剑技能2</p>
            </div>
            <div class="video-item">
              <video 
                src="static/assets/video/2DMetroidvaniaDemo/Skill_ThrowSword_3.mp4"
                autoplay loop muted playsinline
                class="portfolio-video"
              ></video>
              <p class="video-caption">掷剑技能3</p>
            </div>
          </div>
        </div>
        <div class="skill-subsection">
          <h5 class="skill-subtitle">水晶技能</h5>
          <div class="two-images">
            <div class="video-item">
              <video 
                src="static/assets/video/2DMetroidvaniaDemo/Skill_Crystal_1.mp4"
                autoplay loop muted playsinline
                class="portfolio-video"
              ></video>
              <p class="video-caption">水晶技能1</p>
            </div>
            <div class="video-item">
              <video 
                src="static/assets/video/2DMetroidvaniaDemo/Skill_Crystal_2.mp4"
                autoplay loop muted playsinline
                class="portfolio-video"
              ></video>
              <p class="video-caption">水晶技能2</p>
            </div>
          </div>
        </div>
        <div class="skill-subsection">
          <h5 class="skill-subtitle">终极技能</h5>
          <div class="single-video">
            <div class="video-item">
              <video 
                src="static/assets/video/2DMetroidvaniaDemo/Skill_Ultimate.mp4"
                autoplay loop muted playsinline
                class="portfolio-video featured-video"
              ></video>
              <p class="video-caption">终极技能</p>
            </div>
          </div>
        </div>
      </div>
      <!-- UI -->
      <div class="feature-section">
        <h4 class="feature-title">UI界面展示</h4>
        <p class="feature-description">
          • 由UIManager单例统一管理屏幕UI
          <br>
          • 包括主菜单，暂停界面、技能树、HUD、结算界面
        </p>
        <div class="four-images">
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/MainMenu.png"
              class="portfolio-video"
              alt="主菜单界面"
            >
            <p class="video-caption">主菜单</p>
          </div>
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/PauseMenu.png"
              class="portfolio-video"
              alt="暂停界面"
            >
            <p class="video-caption">暂停界面</p>
          </div>
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/HUD.png"
              class="portfolio-video"
              alt="HUD界面"
            >
            <p class="video-caption">HUD</p>
          </div>
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/GameOver.png"
              class="portfolio-video"
              alt="结算界面"
            >
            <p class="video-caption">结算界面</p>
          </div>
        </div>
        <div class="four-images">
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/SkillTree.png"
              class="portfolio-video"
              alt="技能树界面"
            >
            <p class="video-caption">技能树界面</p>
          </div>
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/SkillTree1.png"
              class="portfolio-video"
              alt="技能树界面"
            >
            <p class="video-caption">技能1</p>
          </div>
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/SkillTree2.png"
              class="portfolio-video"
              alt="技能树界面"
            >
            <p class="video-caption">技能2</p>
          </div>
          <div class="video-item">
            <img 
              src="static/assets/img/2DMetroidvaniaDemo/SkillTree3.png"
              class="portfolio-video"
              alt="技能树界面"
            >
            <p class="video-caption">技能3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 3D Platform Demo -->
  <div class="portfolio-item">
    <h3 class="portfolio-title">
      <i class="bi bi-chevron-right"></i>
      <span class="project-status status-ongoing">已完成</span>
      <span class="project-date">2026年5月 - 2026年6月</span>
      3D Platform Demo
    </h3>
    <div class="portfolio-content">
      <div class="portfolio-description">
        <p>基于UE5的3D平台跳跃类游戏Demo，C++搭建逻辑框架，蓝图实现动画、UI等表现层内容</p>
      </div>
      <!-- 核心玩法 -->
      <div class="feature-section">
        <h4 class="feature-title">核心玩法</h4>
        <p class="feature-description">
          • 合理利用体力和技能，躲避或者击杀敌人，收集足够的金币以获取胜利
        </p>
        <div class="four-images">
          <div class="video-item">
            <video 
              src="static/assets/video/3DPlatformDemo/Attack.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">攻击交互</p>
          </div>
          <div class="video-item">
            <video 
              src="static/assets/video/3DPlatformDemo/CollectCoin.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">收集金币</p>
          </div>
          <div class="video-item">
            <video 
              src="static/assets/video/3DPlatformDemo/GameWin.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">游戏胜利</p>
          </div>
          <div class="video-item">
            <video 
              src="static/assets/video/3DPlatformDemo/Dead.mp4"
              autoplay loop muted playsinline
              class="portfolio-video"
            ></video>
            <p class="video-caption">角色死亡</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- AircraftWar -->
  <div class="portfolio-item">
    <h3 class="portfolio-title">
      <i class="bi bi-chevron-right"></i>
      <span class="project-status status-completed">已完成</span>
      <span class="project-date">2025年10月</span>
      AircraftWar 飞机大战
    </h3>
    <div class="portfolio-content">
      <div class="portfolio-links">
        <a href="https://github.com/yanakix/AircraftWar" class="github-link" target="_blank">
          <i class="bi bi-github"></i> 前往GitHub仓库
        </a>
      </div>
      <div class="portfolio-description">
        飞机大战项目是校内课程<strong>软件构造</strong>的实验课作业，实现了一个难度分级，包含菜单、得分榜UI（UI借助Swing实现）的完整小游戏<br>
        在该项目中，我进行了如下工作：<br>
        •核心游戏逻辑的设计与架构实现<br>
        •通过抽象工厂 + 策略模式解耦敌机、子弹与射击行为，提升扩展性<br>
        •使用模板方法抽象游戏流程，不同难度仅需定制参数与局部逻辑<br>
        •使用 DAO 模式管理本地得分数据，实现排行榜持久化<br>
        •使用线程池调度敌机生成、子弹发射与音频播放，避免主线程阻塞<br>
      </div>
      <div class="five-images">
        <div class="video-item">
          <video 
            src="static/assets/video/AircraftWar/MenuUI.mp4"
            autoplay 
            loop 
            muted 
            playsinline
            class="portfolio-video"
          ></video>
          <p class="video-caption">游戏主界面与菜单UI</p>
        </div>
        <div class="video-item">
          <video 
            src="static/assets/video/AircraftWar/ScoreUI.mp4"
            autoplay 
            loop 
            muted 
            playsinline
            class="portfolio-video"
          ></video>
          <p class="video-caption">游戏结束结算得分榜UI</p>
        </div>
        <div class="video-item">
          <video 
            src="static/assets/video/AircraftWar/BossBattle.mp4"
            autoplay 
            loop 
            muted 
            playsinline
            class="portfolio-video"
          ></video>
          <p class="video-caption">Boss战</p>
        </div>
        <div class="video-item">
          <video 
            src="static/assets/video/AircraftWar/ShootStrategy1.mp4"
            autoplay 
            loop 
            muted 
            playsinline
            class="portfolio-video"
          ></video>
          <p class="video-caption">射击模式1</p>
        </div>
        <div class="video-item">
          <video 
            src="static/assets/video/AircraftWar/ShootStrategy2.mp4"
            autoplay 
            loop 
            muted 
            playsinline
            class="portfolio-video"
          ></video>
          <p class="video-caption">射击模式2</p>
        </div>
      </div>
    </div>
  </div>
</div>