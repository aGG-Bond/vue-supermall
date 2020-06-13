import request from './request'

export const reqCategory = ()=>request('/category')

export const reqSubcategory = maitKey =>request('/subcategory',{ maitKey })

