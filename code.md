# 코드

## 알고리즘 설명

이 프로젝트는 이렇게 작동해요:

1. 계속 반복해서 가변저항의 값을 읽어요
2. 가변저항 값(0부터 1023)을, 서보모터 각도(0부터 180)로 변환해요
3. 변환된 각도 값으로 서보모터를 움직여요
4. 가변저항을 돌리면 서보모터가 움직이고, 도시락이 입을 벌려요

## 블록코딩

이 그림처럼 블록을 연결하면 돼요:

![code](/img/microbit-blocks.png)

## 텍스트코딩 (Python)

```python
def on_forever():
    pins.servo_write_pin(AnalogPin.P2,
        Math.map(pins.analog_read_pin(AnalogReadWritePin.P1), 0, 1023, 0, 180))
basic.forever(on_forever)
```

## 코드 업로드하는 방법

1. 컴퓨터에서 [MakeCode 편집기](https://makecode.microbit.org/)를 열어요.
2. "새 프로젝트" 버튼을 눌러요.
3. 블록을 그림처럼 연결해요.
4. 프로젝트 이름을 넣고 저장해요.
5. "다운로드" 버튼을 눌러서 파일을 컴퓨터에 저장해요.
6. USB 케이블로 마이크로비트를 컴퓨터에 연결해요.
7. 다운로드한 파일을 마이크로비트 드라이브에 복사해요.
8. 코드가 마이크로비트에 올라가면 자동으로 실행돼요.

## 코드 바꿔보기

1. **서보모터 각도 범위 바꾸기**:
   - `맵 값 0 에서 1023 을 0 에서 180 으로` 부분에서 180 대신 다른 숫자를 넣어보세요.
   - 예를 들면, 90으로 바꾸면 도시락이 덜 벌어져요.
   
2. **움직임 방향 바꾸기**:
   - `맵 값 0 에서 1023 을 0 에서 180 으로` 부분을 `맵 값 0 에서 1023 을 180 에서 0 으로`로 바꿔보세요.
   - 이렇게 하면 가변저항을 돌리는 방향과 서보모터가 움직이는 방향이 반대가 돼요.

3. **속도 조절하기**:
   - 코드에 짧은 대기 시간을 추가해서 움직임을 부드럽게 만들어보세요.

## 문제 해결하기

- **서보모터가 움직이지 않아요**: 
  - 전선이 제대로 연결되었는지 확인하세요.
  - 특히 P2 핀에 서보모터 신호선이 제대로 연결되었는지 확인하세요.
  
- **가변저항을 돌려도 반응이 없어요**:
  - P1 핀에 가변저항 가운데 핀이 제대로 연결되었는지 확인하세요.
  - 코드에서 P1 핀을 읽고 있는지 확인하세요.
  
- **서보모터가 이상하게 움직여요**:
  - 각도 범위가 적절한지 확인하세요. 
  - 서보모터마다 특성이 조금씩 다를 수 있어요.
