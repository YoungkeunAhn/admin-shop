import { Box, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React, { useState } from 'react'
import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import useStyles from './styles'

type Props = {}

type ShopInfoInputsType = {
  shopName: string
  businessNum: string
  shopTel: string
  category: string
  ownerName: string
  ownerPhoneNum: string
  holiday: string
  legalHoliday: boolean
}

type PositionInfoInputsType = {
  zipNum: number | null
  address: string
  detailAddress: string
  havePark: 0 | 1 | 2
  haveDriveThru: boolean
}

const initialShopInfoInputs: ShopInfoInputsType = {
  shopName: '',
  businessNum: '',
  shopTel: '',
  category: '',
  ownerName: '',
  ownerPhoneNum: '',
  holiday: '',
  legalHoliday: true,
}

const initialPositionInfoInputs: PositionInfoInputsType = {
  zipNum: null,
  address: '',
  detailAddress: '',
  havePark: 0,
  haveDriveThru: false,
}

export default function SignUp3(props: Props) {
  const [shopInfoInputs, setShopInfoInputs] = useState<ShopInfoInputsType>(
    initialShopInfoInputs
  )
  const [positionInfoInputs, setPositionInfoInputs] =
    useState<PositionInfoInputsType>(initialPositionInfoInputs)
  const classes = useStyles()

  const onChangeShopInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShopInfoInputs({
      ...shopInfoInputs,
      [event.target.name]: event.target.value,
    })
  }

  const onChangePositionInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPositionInfoInputs({
      ...positionInfoInputs,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <>
      <StyledInfoPaper title="지점정보">
        <Box className={classes.shopInfoContainer}>
          <Box>
            <DataInputForm
              label="지점명"
              name="shopName"
              value={shopInfoInputs.shopName}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="사업자번호"
              name="businessNum"
              value={shopInfoInputs.businessNum}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="지점번호"
              name="shopTel"
              value={shopInfoInputs.shopTel}
              onChange={onChangeShopInputs}
            />
            <DataInputForm
              label="휴무"
              name="holiday"
              value={shopInfoInputs.holiday}
              onChange={onChangeShopInputs}
            />
          </Box>

          <Box>
            <DataInputForm
              label="업종형태"
              name="category"
              value={shopInfoInputs.category}
              onChange={onChangeShopInputs}
            />
            <DataInputForm
              label="대표자명"
              name="ownerName"
              value={shopInfoInputs.ownerName}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="대표자 연락처"
              name="ownerPhoneNum"
              value={shopInfoInputs.ownerPhoneNum}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="공휴일"
              name="holiday"
              value={shopInfoInputs.legalHoliday}
              onChange={onChangeShopInputs}
              noInput
            >
              <RadioGroup
                name="legalHoliday"
                value={shopInfoInputs.legalHoliday}
                onChange={onChangeShopInputs}
              >
                <FormControlLabel
                  // value={true}
                  control={<Radio size="small" />}
                  label="영업중"
                  labelPlacement="end"
                />
                <FormControlLabel
                  // value={false}
                  control={<Radio size="small" />}
                  label="영업안함"
                  labelPlacement="end"
                />
              </RadioGroup>
            </DataInputForm>
          </Box>
        </Box>
      </StyledInfoPaper>
      <StyledInfoPaper title="위치 정보">
        <Box className={classes.positionInfoContainer}>
          <Box>
            <DataInputForm
              label="우편번호"
              name="zipNum"
              value={positionInfoInputs.zipNum}
              onChange={onChangePositionInputs}
              require
            />
            <DataInputForm
              label="기본주소"
              name="address"
              value={positionInfoInputs.address}
              onChange={onChangePositionInputs}
              require
            />
            <DataInputForm
              label="주차장 유무"
              name="havePark"
              value={positionInfoInputs.havePark}
              onChange={onChangePositionInputs}
              noInput
            >
              <RadioGroup>
                <FormControlLabel
                  // value={false}

                  control={<Radio size="small" color="primary" />}
                  label="없음"
                  labelPlacement="end"
                />
                <FormControlLabel
                  // value={false}
                  control={<Radio size="small" color="primary" />}
                  label="상가 주차장"
                  labelPlacement="end"
                />
                <FormControlLabel
                  // value={false}
                  control={<Radio size="small" color="primary" />}
                  label="개인 주차장"
                  labelPlacement="end"
                />
              </RadioGroup>
            </DataInputForm>
          </Box>
          <Box>
            <DataInputForm
              label="상세주소"
              name="detailAddress"
              value={positionInfoInputs.detailAddress}
              onChange={onChangePositionInputs}
              require
            />
            <DataInputForm
              label="드라이브 스루"
              name="haveDriveThru"
              value={positionInfoInputs.haveDriveThru}
              onChange={onChangePositionInputs}
              noInput
            >
              <RadioGroup
                onChange={onChangePositionInputs}
                value={positionInfoInputs.haveDriveThru}
              >
                <FormControlLabel
                  value={false}
                  control={<Radio size="small" color="primary" />}
                  label="없음"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={true}
                  control={<Radio size="small" color="primary" />}
                  label="있음"
                  labelPlacement="end"
                />
              </RadioGroup>
            </DataInputForm>
          </Box>
        </Box>
      </StyledInfoPaper>
    </>
  )
}
