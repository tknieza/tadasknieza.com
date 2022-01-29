// // "Voxel Web Development" (https://skfb.ly/opvLV) by Diego G. is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

import React, { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import loadGLTFModel from 'lib/Model'
import { Spinner, ModelContainer } from 'components/VoxelArtLoader'

const VoxelArt = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(3 * Math.PI),
    5,
    15 * Math.cos(3 * Math.PI)
  )
  const [scene] = useState(new THREE.Scene())

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const screenWidth = container.clientWidth
      const screenHeight = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        precision: 'highp',
        antialias: true,
        alpha: true
      })

      renderer.setSize(screenWidth, screenHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.outputEncoding = THREE.sRGBEncoding

      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const camera = new THREE.PerspectiveCamera(
        35,
        screenWidth / screenHeight,
        1,
        1000
      )

      camera.lookAt(target)
      camera.position.copy(initialCameraPosition)

      const ambientLight = new THREE.AmbientLight(0x404040, 3)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, '/laptop.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null

      const animate = () => {
        req = requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
  }, [handleWindowResize])

  return (
    <ModelContainer ref={refContainer}>{loading && <Spinner />}</ModelContainer>
  )
}

export default VoxelArt
