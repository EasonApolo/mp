// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

interface DisplayedActivity extends Omit<Activity, 'date'> {
  date: string
}
Page({
  data: {
    items: [] as DisplayedActivity[],
  },
  onLoad() {
    this.setData({
      items: [
        { id: 233, title: 'Test1', date: formatTime(new Date()), type: 1 },
        { id: 234, title: 'Test2', date: formatTime(new Date()), type: 1 },
      ],
    })
  },
  detailTap() {
    wx.navigateTo({ url: '../activity/index' })
  }
})
