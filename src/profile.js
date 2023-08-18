import { useAccount, useEnsName } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'

export function Profile() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { open } = useWeb3Modal()

 

  if (isConnected) return <div>Connected to {ensName ?? address}</div>
  return <button onClick={() => open()}>Connect</button>
}
