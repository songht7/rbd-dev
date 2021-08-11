module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es" }
      // { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }  //如果不需要自定义主题 需要设置style
    ]
  ]
};