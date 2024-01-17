
@echo off

rem https://www.python100.com/html/111789.html

set /a i=0
:LoopStart
  echo loop %i%
  set /a i+=1

  rem git add *
  git commit -m "%date% %time%: Updated By test"
  git push
  rem exit

  if %i% leq 100 goto LoopStart


