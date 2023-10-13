
import { formatTime } from '../../utils/util'
interface DisplayedActivity extends Omit<Activity, 'date'> {
  date: string
}
Page({
  data: {
    activity: {} as DisplayedActivity,
  },
  onLoad() {
    this.setData({
      activity: { id: 233, title: '狼人杀', date: formatTime(new Date()), type: 1 },
    })
  },
  detailTap() {
    wx.navigateTo({ url: '../activity/activity' })
  }
})
