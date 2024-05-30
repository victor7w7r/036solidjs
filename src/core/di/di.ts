import { asFunction } from 'awilix'

import { getBitcoinUseCase } from '@/home/business/usecases/binance/get-bitcoin'
import { binanceDataSource } from '@/home/data/datasources/binance-datasource'
import { binanceRepository } from '@/home/data/repositories'
import { createTypedContainer } from '~/di/typed-container'
import { axiosModule } from '~/modules'

export const inject = createTypedContainer({
  axiosModule: asFunction(axiosModule).singleton(),
  binanceDataSource: asFunction(binanceDataSource),
  binanceRepository: asFunction(binanceRepository),
  getBitcoinUseCase: asFunction(getBitcoinUseCase)
})
