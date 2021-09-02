## 切换npm镜像源

1. 用npm全局安装nrm

```bash
npm install -g nrm --save
```

2. 查看所有可用的源

```shell
带*号即为当前使用的配置
nrm ls
```

3. 添加源

```
nrm add 源的名称 https://地址
```

4. 如果想删除某个源

```
nrm del 源的名字
```

5. 切换到某个源

```
nrm use 源的名字
```

6. 测试源的速度

```
nrm test
测试某一个源的速度
nrm test 源的名字
```

7. 查看当前使用的是哪个源

```
nrm current
```
