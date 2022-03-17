import StyledTableContainer from "@/common/styled-table-container/StyledTableContainer"
import { CameraDataType } from "@/types/enum"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core"
import React from "react"
import CameraListTbodyRow from "./tbody-row/CameraListTbodyRow"

type Props = {
  cameraList: CameraDataType[]
}

export default function CameraListTable(props: Props) {
  const { cameraList } = props

  return (
    <StyledTableContainer>
      <Box p={2}>
        <Typography variant="h6">카메라 목록</Typography>
      </Box>
      <Box p={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">NO</TableCell>
              <TableCell align="center">썸네일 이미지</TableCell>
              <TableCell align="center">카메라 이름</TableCell>
              <TableCell align="center">MAC 주소</TableCell>
              <TableCell align="center">등록일</TableCell>
              <TableCell align="center">수정</TableCell>
              <TableCell align="center">삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cameraList.map((data, idx) => (
              <CameraListTbodyRow key={idx} seq={idx} data={data} />
            ))}
          </TableBody>
        </Table>
      </Box>
    </StyledTableContainer>
  )
}
