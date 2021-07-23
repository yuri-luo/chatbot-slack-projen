使用原生 CDK 結合 projen 進行管理，介接 lambda 觸發 cloudWatch Alerm 通知 ChatBot Slack

其中為了比對 lambda 的應用採取了以下兩種不同方式建置 lambda
- 使用 lambda 程式打包進 S3 後再使用 typescript 進行編譯
- 使用 docker bulid 方式對 lambda 進行編譯
