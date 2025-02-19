#!/bin/bash

echo "开始部署..."


# 设置正确的权限
ssh root@124.222.88.179 "chown -R root:root /home/studylandsedu/ && chmod -R 755 /home/studylandsedu/"

echo "部署完成！"

# 显示服务器上的修改
echo "服务器上最近修改的文件："
ssh root@124.222.88.179 "find /home/studylandsedu -type f -mmin -10 | grep -v '.git'" 