import './App.css';
import {Profile} from './profile'
import {  WagmiConfig, createConfig, configureChains, mainnet  } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})
function App() {
  return (
    <WagmiConfig config={config}>
    <Profile />
  </WagmiConfig>
  );
}

export default App;
