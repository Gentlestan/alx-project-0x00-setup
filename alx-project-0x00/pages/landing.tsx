import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div className=" flex flex-col h-screen justify-center items-center gap-5">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Card />
        <Card />
      <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  )
}
export default Landing