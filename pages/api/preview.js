export default function handler(req, res) {
const {secret,productId} = req.query;
  if (secret !== "wynnresposibility" || !productId){
  return  res.status(400).json({ value: "invalid input" });
  }
  res.setPreviewData({});
  res.redirect(`/${productId == "/" ?"" : productId }`);
  res.end()
}
