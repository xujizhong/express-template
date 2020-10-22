const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: String, //用户名称
    password: String, //密码
    meta: {
      createAt: {
        type: Date,
        default: Date.now,
      },
      updateAt: {
        type: Date,
        default: Date.now,
      },
    },
  },
  { versionKey: false }
);

/**
 * 保存时更改创建时间和修改时间
 */
usersSchema.pre("save", function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }

  next();
});

module.exports = usersSchema;
