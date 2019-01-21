echo off

call pbjs -t static-module -w closure -o bundle.js app_proto.proto --keep-case --no-verify --no-convert --no-delimited
call pbts -o bundle.d.ts bundle.js --no-comments -m

REM for /f "delims=" %%i in ('dir /s/b *.ts') do (
REM     for /f "delims=" %%a in ('type "%%~fi"') do (
REM         set "foo=%%a"
REM         call,set foo=%%foo:$protobuf=protobuf%%
REM         call,echo/%%foo%%>>"%%~fi._"
REM     )
REM     move "%%~fi._" "%%~fi"
REM )

move ./bundle.d.ts ../libs/bundle
move ./bundle.js ../libs/bundle

pause