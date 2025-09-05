'use client'

import { useLoading } from "../../contexts/LoadingContext"
import LoadingSpinner from "../LoadingSpinner"

export default function LoadingWrapper() {
  const { isLoading } = useLoading()
  
  return isLoading ? <LoadingSpinner /> : null
}
