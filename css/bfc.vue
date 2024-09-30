<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body style="margin: 0; padding: 0">
    <!-- float-sitiation -->
    <!-- 子元素浮动导致高度塌陷 -->
    <div style="background-color: pink" class="bfc-overflow-auto">
      <div
        style="
          width: 5rem;
          height: 5rem;
          background-color: red;
          float: left;
        "></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        amet impedit illo at veniam tenetur! Repudiandae sed veniam corrupti
        eligendi dolore corporis? Repellat quos error, blanditiis repellendus
        illum laboriosam inventore?
      </p>
    </div>
    <!-- margin-collapse-sitiation-1 -->
    <!-- 纵向margin重叠 -->
    <div
      class="bfc-float-left"
      style="
        width: 3rem;
        height: 3rem;
        margin: 3rem 0;
        background-color: purple;
      "
      class=""></div>
    <div
      class="bfc-float-left"
      style="
        width: 100%;
        height: 3rem;
        margin-top: 1rem;
        background-color: pink;
      "
      class=""></div>
    <!-- text wrapping-situation -->
    <div
      style="
        position: absolute;
        top: 20rem;
        width: 20%;
        background-color: gray;
        height: 10rem;
        overflow: auto;
      ">
      <div
        style="
          display: inline-block;
          width: 5rem;
          height: 5rem;
          background-color: blueviolet;
          color: white;
        ">
        img
      </div>
      <span class="bfc-float-left"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        repudiandae rerum sit, voluptate qui illo doloribus cupiditate, aut hic
        ad quo aspernatur molestiae, alias recusandae molestias voluptatibus
        aliquid eaque vel!</span
      >
    </div>
    <!-- margin-collapse-sitiation-2 -->
    <div style="height: 25rem"></div>
    <!-- 子元素margin传递给父元素 -->
    <div style="background-color: palegreen">
      <div
        style="
          width: 10rem;
          height: 10rem;
          background-color: brown;
          margin-top: 5rem;
        "></div>
    </div>
  </body>
  <style lang="css">
    .bfc-overflow-auto {
      overflow: auto;
    }

    .bfc-overflow-hidden {
      overflow: hidden;
    }

    .bfc3-overflow-scroll {
      overflow: scroll;
    }

    .bfc-float-left {
      float: left;
    }

    .bfc-float-right {
      float: right;
    }
  </style>
</html>
