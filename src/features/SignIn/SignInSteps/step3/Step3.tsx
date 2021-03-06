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
  legalHoliday: number
}

type PositionInfoInputsType = {
  zipNum: number | null
  address: string
  detailAddress: string
  havePark: number
  haveDriveThru: number
}

const initialShopInfoInputs: ShopInfoInputsType = {
  shopName: '',
  businessNum: '',
  shopTel: '',
  category: '',
  ownerName: '',
  ownerPhoneNum: '',
  holiday: '',
  legalHoliday: 1,
}

const initialPositionInfoInputs: PositionInfoInputsType = {
  zipNum: null,
  address: '',
  detailAddress: '',
  havePark: 0,
  haveDriveThru: 0,
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

  const onChangeLegalHoliday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShopInfoInputs({
      ...shopInfoInputs,
      legalHoliday: parseInt(event.target.value),
    })
  }
  const onChangePark = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPositionInfoInputs({
      ...positionInfoInputs,
      havePark: parseInt(event.target.value),
    })
  }
  const onChangeThru = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPositionInfoInputs({
      ...positionInfoInputs,
      haveDriveThru: parseInt(event.target.value),
    })
  }
  return (
    <>
      <StyledInfoPaper title="????????????">
        <Box className={classes.shopInfoContainer}>
          <Box>
            <DataInputForm
              label="?????????"
              name="shopName"
              value={shopInfoInputs.shopName}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="???????????????"
              name="businessNum"
              value={shopInfoInputs.businessNum}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="????????????"
              name="shopTel"
              value={shopInfoInputs.shopTel}
              onChange={onChangeShopInputs}
            />
            <DataInputForm
              label="??????"
              name="holiday"
              value={shopInfoInputs.holiday}
              onChange={onChangeShopInputs}
            />
          </Box>

          <Box>
            <DataInputForm
              label="????????????"
              name="category"
              value={shopInfoInputs.category}
              onChange={onChangeShopInputs}
            />
            <DataInputForm
              label="????????????"
              name="ownerName"
              value={shopInfoInputs.ownerName}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="????????? ?????????"
              name="ownerPhoneNum"
              value={shopInfoInputs.ownerPhoneNum}
              onChange={onChangeShopInputs}
              require
            />
            <DataInputForm
              label="?????????"
              name="holiday"
              value={shopInfoInputs.legalHoliday}
              onChange={onChangeShopInputs}
              noInput
            >
              <RadioGroup
                name="legalHoliday"
                value={shopInfoInputs.legalHoliday}
                onChange={onChangeLegalHoliday}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio size="small" color="primary" />}
                  label="?????????"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={0}
                  control={<Radio size="small" color="primary" />}
                  label="????????????"
                  labelPlacement="end"
                />
              </RadioGroup>
            </DataInputForm>
          </Box>
        </Box>
      </StyledInfoPaper>
      <StyledInfoPaper title="?????? ??????">
        <Box className={classes.positionInfoContainer}>
          <Box>
            <DataInputForm
              label="????????????"
              name="zipNum"
              value={positionInfoInputs.zipNum}
              onChange={onChangePositionInputs}
              require
            />
            <DataInputForm
              label="????????????"
              name="address"
              value={positionInfoInputs.address}
              onChange={onChangePositionInputs}
              require
            />
            <DataInputForm
              label="????????? ??????"
              name="havePark"
              value={positionInfoInputs.havePark}
              onChange={onChangePositionInputs}
              noInput
            >
              <RadioGroup
                onChange={onChangePark}
                value={positionInfoInputs.havePark}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio size="small" color="primary" />}
                  label="??????"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={1}
                  control={<Radio size="small" color="primary" />}
                  label="?????? ?????????"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio size="small" color="primary" />}
                  label="?????? ?????????"
                  labelPlacement="end"
                />
              </RadioGroup>
            </DataInputForm>
          </Box>
          <Box>
            <DataInputForm
              label="????????????"
              name="detailAddress"
              value={positionInfoInputs.detailAddress}
              onChange={onChangePositionInputs}
              require
            />
            <DataInputForm
              label="???????????? ??????"
              name="haveDriveThru"
              value={positionInfoInputs.haveDriveThru}
              onChange={onChangePositionInputs}
              noInput
            >
              <RadioGroup
                onChange={onChangeThru}
                value={positionInfoInputs.haveDriveThru}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio size="small" color="primary" />}
                  label="??????"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={1}
                  control={<Radio size="small" color="primary" />}
                  label="??????"
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
