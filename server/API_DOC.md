## Kode sisi sender :

```js
socket.emit("welcome", "hello ges" + socket.id);
```

&nbsp;

## Kode sisi receiver

```js
socket.on("kirimText", (hasiltext) => {
  socket.broadcast.emit("update", hasiltext);
  io.emit("msg update", {
    from: socket.handshake.auth.username,
    hasiltext,
  });
});
```

```js
socket.on("disconnect", () => {
  userOnline = userOnline.filter((el) => {
    return el.socketId !== socket.id;
  });
});
```
