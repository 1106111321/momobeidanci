#!/bin/bash

cd /home/wwwroot/momobeidanci
echo "1、拉取代码..."
#git reset --hard origin/master
#git clean -f
git pull
#git checkout master

echo "2、推送gitHub..."
for((i=1;i<=10;i++));do
  echo "loop："$i
  echo -e "访问时间是：`date '+%Y-%m-%d %H:%M:%S'`"
  git push gitHub_origin "master"
done

echo "3、部署完成"
