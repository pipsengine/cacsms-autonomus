import { KernelManager } from "./kernel-manager";

const kernel = new KernelManager();

export function getPlatformKernel() {
  return kernel;
}

export function initializePlatformKernel() {
  return kernel.start();
}

export function shutdownPlatformKernel() {
  return kernel.shutdown();
}
