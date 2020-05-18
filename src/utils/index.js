// 放置当前案例需要的工具方法

export const formate = time=>{
  let data = new Date(new Date() - time)
  return data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+''+data.getHours()+':'+data.getSeconds()
}