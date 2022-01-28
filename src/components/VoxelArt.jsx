// // "Voxel Web Development" (https://skfb.ly/opvLV) by Diego G. is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

import React, { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import loadGLTFModel from '../lib/Model'
// eslint-disable-next-line no-unused-vars
import { Spinner, ModelContainer } from './VoxelArtLoader'

// function easeOutCirc(x) {
//   return Math.sqrt(1 - Math.pow(x - 1, 4))
// }

const VoxelDog = () => {
  const refContainer = useRef()
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  // eslint-disable-next-line no-unused-vars
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(10 * Math.PI),
    8,
    15 * Math.cos(10 * Math.PI)
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
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(screenWidth, screenHeight)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const scale = screenHeight * 0.004
      const camera = new THREE.PerspectiveCamera(35, scale, 0.01)

      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
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

export default VoxelDog
