/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { IndicatorTemplate } from '../../component/Indicator'

interface Roc {
  roc?: number
  maRoc?: number
}

/**
 * 变动率指标
 * 公式：ROC = (CLOSE - REF(CLOSE, N)) / REF(CLOSE, N)
 */
const rateOfChange: IndicatorTemplate<Roc, number> = {
  name: 'ROC',
  shortName: 'ROC',
  calcParams: [12, 6],
  figures: [
    { key: 'roc', title: 'ROC: ', type: 'line' },
    { key: 'maRoc', title: 'MAROC: ', type: 'line' }
  ],
  calc: (dataList, indicator) => {
    const params = indicator.calcParams
    const rocList: Roc[] = []
    const result: Record<number, Roc> = {}
    let rocSum = 0
    dataList.forEach((kLineData, i) => {
      const roc: Roc = {}
      if (i >= params[0] - 1) {
        const close = kLineData.close
        const agoClose = (dataList[i - params[0]] ?? dataList[i - (params[0] - 1)]).close
        if (agoClose !== 0) {
          roc.roc = (close - agoClose) / agoClose * 100
        } else {
          roc.roc = 0
        }
        rocSum += roc.roc
        if (i >= params[0] - 1 + params[1] - 1) {
          roc.maRoc = rocSum / params[1]
          rocSum -= (rocList[i - (params[1] - 1)].roc ?? 0)
        }
      }
      rocList.push(roc)
      result[kLineData.timestamp] = roc
    })
    return result
  }
}

export default rateOfChange
