<template>
  <div id="home-page">
    <banner />
    <div id="content">
      <content-section header="Hello, World!">
        <template slot="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tincidunt mauris laoreet euismod. Phasellus vitae felis ultricies, aliquet lacus vel, laoreet ex. Aliquam erat volutpat. Nullam nulla ipsum, pretium sit amet mi eu, porta aliquam arcu. Pellentesque bibendum enim sed interdum condimentum. Cras lacinia tincidunt massa non venenatis. Nam luctus consectetur mauris eget hendrerit. Integer imperdiet blandit purus a congue. Vivamus tempor leo sit amet turpis egestas gravida.

          Etiam mattis vitae ante vel fringilla. Integer vehicula sapien et metus tincidunt ornare. Cras et pretium ante. Maecenas gravida iaculis porttitor. In sit amet ex at magna tristique interdum. Vivamus tristique luctus nisi. Nam maximus leo mauris, id rutrum nulla lacinia vitae. Vestibulum efficitur magna faucibus faucibus sagittis. Nullam felis massa, eleifend ut elit condimentum, vehicula commodo metus. Nam neque eros, pharetra at nisl vel, mattis efficitur turpis. Morbi sed pellentesque purus, non tincidunt odio. Etiam augue nulla, mollis ut accumsan eu, hendrerit ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce nec elit magna.
        </template>
        <skills />
      </content-section>

      <content-section header="This is what I've done">
        <template slot="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tincidunt mauris laoreet euismod. Phasellus vitae felis ultricies, aliquet lacus vel, laoreet ex. Aliquam erat volutpat. Nullam nulla ipsum, pretium sit amet mi eu, porta aliquam arcu. Pellentesque bibendum enim sed interdum condimentum. Cras lacinia tincidunt massa non venenatis. Nam luctus consectetur mauris eget hendrerit. Integer imperdiet blandit purus a congue. Vivamus tempor leo sit amet turpis egestas gravida.

          Etiam mattis vitae ante vel fringilla. Integer vehicula sapien et metus tincidunt ornare. Cras et pretium ante. Maecenas gravida iaculis porttitor. In sit amet ex at magna tristique interdum. Vivamus tristique luctus nisi. Nam maximus leo mauris, id rutrum nulla lacinia vitae. Vestibulum efficitur magna faucibus faucibus sagittis. Nullam felis massa, eleifend ut elit condimentum, vehicula commodo metus. Nam neque eros, pharetra at nisl vel, mattis efficitur turpis. Morbi sed pellentesque purus, non tincidunt odio. Etiam augue nulla, mollis ut accumsan eu, hendrerit ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce nec elit magna.
        </template>
        This is some text that will scroll differently
      </content-section>

      <content-section header="Get ahold of me">
        <template slot="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tincidunt mauris laoreet euismod. Phasellus vitae felis ultricies, aliquet lacus vel, laoreet ex. Aliquam erat volutpat. Nullam nulla ipsum, pretium sit amet mi eu, porta aliquam arcu. Pellentesque bibendum enim sed interdum condimentum. Cras lacinia tincidunt massa non venenatis. Nam luctus consectetur mauris eget hendrerit. Integer imperdiet blandit purus a congue. Vivamus tempor leo sit amet turpis egestas gravida.

          Etiam mattis vitae ante vel fringilla. Integer vehicula sapien et metus tincidunt ornare. Cras et pretium ante. Maecenas gravida iaculis porttitor. In sit amet ex at magna tristique interdum. Vivamus tristique luctus nisi. Nam maximus leo mauris, id rutrum nulla lacinia vitae. Vestibulum efficitur magna faucibus faucibus sagittis. Nullam felis massa, eleifend ut elit condimentum, vehicula commodo metus. Nam neque eros, pharetra at nisl vel, mattis efficitur turpis. Morbi sed pellentesque purus, non tincidunt odio. Etiam augue nulla, mollis ut accumsan eu, hendrerit ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce nec elit magna.
        </template>
        This is some text that will scroll differently
      </content-section>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/UI/Banner'
import ContentSection from '~/components/UI/ContentSection'

import Skills from '~/components/Skills'

  export default {
    components: { Banner, ContentSection, Skills }
  }
</script>

<style lang="scss">
#home-page {
  padding-top: $banner-height;

  #banner {
    z-index: 1;
  }
  #content {
    position: relative;
    background: radial-gradient(ellipse closest-side, $gray 80%, lighten($gray, 2%) 97%, lighten($gray, 4%) 110%);
    background-attachment: fixed;
    z-index: 10;
  }
}
</style>
