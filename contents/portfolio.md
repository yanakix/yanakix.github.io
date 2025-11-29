<div class="portfolio-container">
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
        实现过程中对多种设计模式进行了实践：<br>
        - <strong>单例模式</strong>：游戏中英雄机使用单例模式的饿汉式来创建线程安全的实例<br>
        - <strong>抽象工厂</strong>：使用抽象工厂创建不同种类的子弹，道具，敌机<br>
        - <strong>策略模式</strong>：射击模式采用策略模式实现，以方便地实现道具的切换英雄机攻击模式<br>
        - <strong>数据访问对象模式DAO</strong>：使用DAO模式来管理得分数据，并在游戏结束结算时排榜<br>
        - <strong>观察者模式</strong>：使用观察者模式来实现炸弹道具对不同敌机的不同效果<br>
        - <strong>模板模式</strong>：将游戏逻辑抽象出Game模板，然后通过继承模板来实现不同的游戏难度<br>
        除此之外，项目中还使用线程池来定时任务调度，以及使用线程池来管理音频线程
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

  <!-- 2D Metroidvania Demo -->
  <div class="portfolio-item">
    <h3 class="portfolio-title">
      <i class="bi bi-chevron-right"></i>
      <span class="project-status status-ongoing">进行中</span>
      <span class="project-date">2025年10月 - 至今</span>
      2D Metroidvania Demo 2D类恶魔银河城小游戏
    </h3>
    <div class="portfolio-content">
      <div class="portfolio-links">
        <a href="https://github.com/yanakix/AdventureWithUnity" class="github-link" target="_blank">
          <i class="bi bi-github"></i> 前往GitHub仓库
        </a>
      </div>
      <div class="portfolio-description">
        <p>该项目的目的是自学Unity游戏引擎，过程中跟随Udemy的Alex老师的<a href="https://www.udemy.com/course/2d-rpg-alexdev/" target="_blank">RPGGame课程</a>学习。</p>
        <p>该项目不是对课程的完全照抄，在部分细节的实现上加入了自己的思考，同时也加入了一些自己的设计。目前该项目仍在进行中，在此处将展示一些已经实现的功能。</p>
      </div>
      <!-- 移动系统 -->
      <div class="feature-section">
        <h4 class="feature-title">移动系统</h4>
        <p class="feature-description">实现了丰富的角色移动能力，为游戏提供基础。</p>
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
        <p class="feature-description">包含基础攻击和弹反机制。</p>
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
        <p class="feature-description">丰富的技能组合，目前包括两大类小技能和一个终极技能</p>
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
    </div>
  </div>
</div>