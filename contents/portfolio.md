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
      <div class="portfolio-gif">
        <img src="static/assets/gif/test.gif" alt="项目演示 GIF" loading="lazy">
        <p class="gif-caption">项目功能演示</p>
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
        该项目的目的是自学Unity游戏引擎，过程中跟随Udemy的Alex老师的<a href="https://www.udemy.com/course/2d-rpg-alexdev/"target="_blank">RPGGame课程</a>学习。<br>
        该项目不是对课程的完全照抄，在部分细节的实现上加入了自己的思考，同时也加入了一些自己的设计。目前该项目仍在进行中，在此处将展示一些已经实现的功能。
      </div>
      <div class="portfolio-gif">
        <img src="static/assets/gif/test.gif" alt="项目演示 GIF" loading="lazy">
        <p class="gif-caption">核心功能演示</p>
      </div>
    </div>
  </div>

  <!-- end -->
</div>