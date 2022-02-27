import React, { useEffect, useState } from 'react'
import useStyles from './styles'

export default function NaverMapView() {
  const classes = useStyles()

  useEffect(() => {
    let map = new naver.maps.Map('map')

    map = new naver.maps.Map(document.createElement('div'))
    map.setMapTypeId(naver.maps.MapTypeId.HYBRID)
  }, [])

  return (
    <React.Fragment>
      <div id="map" className={classes.mapDiv} />
    </React.Fragment>
  )
}
