
export default function Home() {
  return (
    <div className="p-5">
      <div>
        <h2 className="text-2xl">Mobiles</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/products/iphone.png" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
            </div>
          <p className="text-sm mt-1 leading-4">hejhaks dhalks hklhaklsh klhaklshd hkahsklhdk ahlkshdl khkalshdkl hlakjsknlcaiic cijaj  jaisjc l mkas.</p>
          <div className="flex mt-1">
            <div className="text-2xl text-bold grow">$899</div>
            <button className="bg-emerald-400 text-white py-1 px-3">add to cart</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
