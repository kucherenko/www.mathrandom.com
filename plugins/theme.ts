export default (context: any, inject: any) => {
  const defaultColor = 'hot-red'
  const colors: Record<number, string> = {
    1: 'toxic-green',
    2: 'lemon-sun',
    3: 'hot-red',
    4: 'lemon-sun',
    5: 'toxic-green',
    6: 'deep-sea',
  }

  // Inject $hello(msg) in Vue, context and store.
  inject('getThemeColor', (theme: number) => colors[theme] || defaultColor)
}
