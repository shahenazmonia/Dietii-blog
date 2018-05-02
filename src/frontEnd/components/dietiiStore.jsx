import React from 'react';

const dietiiStore = ()=>{
  return(
    <div className='container storeContainer' id='dietiigooglestore'>
      <div className='row'>
        <div className='col-md-offset-2 col-md-6' style={{'text-align': 'right'}}>
          <img className="googlestore-logo img-responsive" src="https://raw.githubusercontent.com/shahenazmonia/blog/master/5.png"></img>
          <p className='googlestore-content-p'>
            تطبيق بيساعدك تتناولي نفس الوجبات المعتادة لكن بسعرات أقل
            بيعطيكي طرق مبتكرة لوجبات بسعرات قليلة
            يحسب سعراتك اليومية
            يمكنك من خلاله ممارسة التمرين ومعرفة معدل الحرق   </p>
          <a target='_blank' href='https://play.google.com/store/apps/details?id=com.dietiiApp.dietiiApp'>
            <img className='store-img' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/4.png" />
          </a>
        </div>
        <div className='col-md-4'>
          <img className="dietii-screenshot" src="https://raw.githubusercontent.com/shahenazmonia/blog/master/sxxz.png"></img></div>
      </div>
    </div>
  );
};

export default dietiiStore;
