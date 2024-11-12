const config = {
    network: {
      blockchain: 'eos',
      host: 'wax.greymass.com',
      port: 443,
      protocol: 'https',
      chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
      rpcEndpoints: [
        {
          protocol: 'https',
          host: 'wax.greymass.com',
          port: 443,
        },
      ],
    },
    apiUrl: process.env.VUE_APP_API_URL || "http://localhost:8000",
    apiKey: process.env.BE_API_KEY || "bla bla bla",
    dummyVar: process.env.BE_BB || "bla bla bla",
  };
  
  export default config;
  