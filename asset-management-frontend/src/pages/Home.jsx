import React from 'react'

function Button({ text, OnSubmit }) {

    return (
      <>
        <button
          className='rounded border-solid border-2 mb-1 w-full flex justify-center items-center'
          onClick={() => OnSubmit()}
        >
          {text}
        </button>
      </>
    )
  }

const Home = () => {

    function insertAssets(){
        // alert("insert asserts here");
    
       
        window.location.href = '/assets';
      }

    // function getAssets(){
    //     // alert("get asserts here");
    
       
    //     window.location.href = '/retrieve-assets';
    //   }

      
    
      return (
        <>
          <h1 className="text-3xl font-bold">
            Asset Management Dashboard
          </h1>
          <div className='border-2 px-4 py-4 flex flex-col items-center justify-center'>
            <Button text="Insert Record" OnSubmit={insertAssets} />
            <Button text="Retrieve Record" />
            <Button text="Update Record" />
            <Button text="Delete Record" />
            <Button text="Backup" OnSubmit={() => backupAssets()} />
          </div>
        </>
  )
}

export default Home
