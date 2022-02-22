import hyRequest from '../../index'
import { IDataType } from '@/service/login/types'
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
