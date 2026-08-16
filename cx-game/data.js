const personas=[
 {id:'elderly',icon:'👴',name:'عميل كبير في السن',desc:'يحتاج وضوح، صبر ومجهود أقل.',bonus:'Empathy'},
 {id:'busy',icon:'👩‍💼',name:'عميلة مشغولة',desc:'الوقت والسرعة والوضوح أهم شيء.',bonus:'Problem Solving'},
 {id:'student',icon:'👨‍🎓',name:'طالب جامعي',desc:'Digital-first ويتوقع خطوات بسيطة.',bonus:'Digital CX'},
 {id:'angry',icon:'😡',name:'عميل غاضب',desc:'اشتكى قبل كده ويحتاج Ownership.',bonus:'Service Recovery'}
];
const scenarios=[
 {tag:'1 • First Impression',title:'العميل وصل للفرع',sub:'أول دقيقتين ممكن يحددوا إحساس الرحلة كلها.',text:p=>`${p.icon} ${p.name} دخل الفرع ومش عارف يبدأ منين. فيه Queue، والموظفين مشغولين.`,choices:[
  {t:'أشاور له على جهاز الأرقام وأكمل شغلي.',sat:-8,eff:+10,time:+3,emotion:-12,skill:'Empathy',pts:2,grade:'bad',fb:'الخدمة ماشية، لكن العميل لسه محتار ومجهوده زاد.',learn:'CX يبدأ قبل تنفيذ المعاملة نفسها. التوجيه الواضح Touchpoint مهم.'},
  {t:'أرحّب به، أفهم طلبه بسرعة، وأوجّهه للمسار الصحيح وأوضح له المتوقع.',sat:+12,eff:-12,time:-2,emotion:+12,skill:'Empathy',pts:10,grade:'good',fb:'ممتاز. قللت عدم اليقين ومجهود العميل من أول لحظة.',learn:'Clarity + empathy في البداية يقللوا Customer Effort ويبنوا ثقة.'},
  {t:'أطلب منه ينتظر لحد ما يفضى أي موظف.',sat:-5,eff:+5,time:+7,emotion:-8,skill:'Empathy',pts:4,grade:'mid',fb:'مقبول تشغيليًا، لكنه لا يعالج حيرة العميل.',learn:'الانتظار نفسه مش دايمًا المشكلة؛ عدم معرفة ماذا سيحدث بعد ذلك هو Pain Point.'}
 ]},
 {tag:'2 • Missing Requirement',title:'ورقة ناقصة!',sub:'هنا بنشوف الفرق بين “إتمام الإجراء” و“تصميم تجربة”.',text:p=>`بعد انتظار، اتضح إن ${p.name} ناقصه مستند أساسي وممكن يضطر يرجع مرة تانية.`,choices:[
  {t:'أقول له ببساطة: المستند ناقص، ارجع بكرة.',sat:-14,eff:+18,time:+18,emotion:-18,skill:'Journey Awareness',pts:1,grade:'bad',fb:'المعلومة صحيحة، لكن التجربة سيئة جدًا ومجهود العميل تضاعف.',learn:'الـPain Point الحقيقي غالبًا حصل قبل الزيارة: المتطلبات لم تكن واضحة.'},
  {t:'أشرح المستند المطلوب، أراجع باقي المتطلبات كلها، وأوضح له هل فيه بديل أو قناة رقمية قبل ما يرجع.',sat:+13,eff:-14,time:-5,emotion:+10,skill:'Journey Awareness',pts:10,grade:'good',fb:'ممتاز. أنت بتمنع رحلة فاشلة ثانية بدل ما تعالج اللحظة فقط.',learn:'Think end-to-end. تحسين Journey يعني منع Repeat Visits وRework.'},
  {t:'أطلب منه يكلم Call Center ويسألهم.',sat:-6,eff:+12,time:+8,emotion:-10,skill:'Journey Awareness',pts:3,grade:'mid',fb:'حوّلت المجهود للعميل بدل ما تملك المشكلة.',learn:'العميل لا يرى الإدارات؛ هو يرى بنكًا واحدًا.'}
 ]},
 {tag:'3 • Digital Problem',title:'التطبيق فشل في آخر خطوة',sub:'Digital CX مش مسؤولية الـIT وحده.',text:p=>`${p.name} حاول يكمل طلبه من التطبيق. كل شيء كان سهل، لكن ظهر Error في آخر خطوة بعد إدخال البيانات.`,choices:[
  {t:'أقول له يجرب تاني بعد شوية.',sat:-9,eff:+14,time:+12,emotion:-12,skill:'Digital CX',pts:2,grade:'bad',fb:'المشكلة اتأجلت ومفيش Ownership أو وضوح.',learn:'Digital failure في آخر خطوة بيكون مؤلم لأنه يضيّع مجهود تم بالفعل.'},
  {t:'أتحقق من الحالة، أحافظ على البيانات إن أمكن، وأوضح له أقصر Alternative Channel بدون إعادة الخطوات.',sat:+14,eff:-16,time:-6,emotion:+12,skill:'Digital CX',pts:10,grade:'good',fb:'قوي جدًا. حافظت على continuity بين القنوات وقللت إعادة العمل.',learn:'Omnichannel الجيد = انتقال سلس بدون ما العميل يبدأ من الصفر.'},
  {t:'أطلب منه يروح الفرع لأن التطبيق مش شغال.',sat:-5,eff:+16,time:+14,emotion:-10,skill:'Digital CX',pts:4,grade:'mid',fb:'قد يحل الطلب، لكن بمجهود عالي وانتقال غير سلس.',learn:'حل المشكلة مش كفاية؛ لازم نقيس Customer Effort كمان.'}
 ]},
 {tag:'4 • Complaint',title:'العميل قال: “أنا اشتكيت قبل كده”',sub:'دي لحظة Service Recovery حقيقية.',text:p=>`${p.name} واضح عليه الإحباط وبيقول إن دي مش أول مرة يشرح نفس المشكلة.`,choices:[
  {t:'أطلب منه يحكي المشكلة من الأول عشان أفهم.',sat:-12,eff:+18,time:+10,emotion:-18,skill:'Service Recovery',pts:1,grade:'bad',fb:'أنت بتخليه يعيش المشكلة مرة أخرى ويكرر معلوماته.',learn:'Repeated explanation من أقوى مصادر Customer Effort والإحباط.'},
  {t:'أراجع الـhistory، ألخّص له اللي فهمته، أتحمل Ownership وأحدد له next step ووقت متابعة واضح.',sat:+18,eff:-18,time:-8,emotion:+18,skill:'Service Recovery',pts:10,grade:'good',fb:'ممتاز. ده Service Recovery: فهم + Ownership + توقعات زمنية واضحة.',learn:'في الشكاوى، الصمت أو الغموض غالبًا أسوأ من التأخير نفسه.'},
  {t:'أحوّله مباشرة لقسم الشكاوى المختص.',sat:-3,eff:+9,time:+6,emotion:-6,skill:'Service Recovery',pts:5,grade:'mid',fb:'التصعيد قد يكون صحيحًا، لكن لازم يكون handoff واضح وليس تحويل فقط.',learn:'Warm handoff أفضل من “روح للقسم الآخر”.'}
 ]},
 {tag:'5 • Measurement',title:'إزاي نعرف إن التجربة اتحسنت؟',sub:'اختار المؤشر الأنسب للموقف.',text:p=>`بعد تحسين رحلة ${p.name}، الإدارة عايزة تعرف: هل بقى تنفيذ الخدمة أسهل وأقل مجهود؟`,choices:[
  {t:'NPS فقط.',sat:+1,eff:0,time:0,emotion:0,skill:'Measurement',pts:5,grade:'mid',fb:'NPS مهم للولاء/التوصية، لكنه مش أدق مؤشر للمجهود.',learn:'كل Metric ليه سؤال مختلف.'},
  {t:'CES – Customer Effort Score.',sat:+6,eff:-5,time:0,emotion:+3,skill:'Measurement',pts:10,grade:'good',fb:'صح. CES مناسب جدًا لو هدفنا نعرف الخدمة بقت أسهل ولا لأ.',learn:'CES يقيس سهولة/صعوبة إنجاز العميل لهدفه.'},
  {t:'Average Handling Time فقط.',sat:-3,eff:+3,time:-1,emotion:-2,skill:'Measurement',pts:2,grade:'bad',fb:'ده Operational Metric ومش بيحكي وحده تجربة العميل.',learn:'سرعة الموظف ≠ بالضرورة تجربة أفضل للعميل.'}
 ]},
 {tag:'🔥 Final Crisis • Step 1',title:'أزمة متعددة القنوات',sub:'القرار ده هيفتح نتيجة مختلفة في الخطوة الأخيرة.',crisis:true,text:p=>`${p.name} اتخصم منه مبلغ من ATM بدون Cash، اتصل بالـCall Center، وبعدها اتقاله يروح الفرع. هو دلوقتي غاضب جدًا وبيقول: “أنا كلمت البنك 3 مرات!”`,choices:[
  {t:'أبدأ من جديد وأطلب كل التفاصيل للتأكد.',sat:-15,eff:+20,time:+12,emotion:-20,skill:'Problem Solving',pts:1,grade:'bad',branch:'repeat',fb:'ده أسوأ سيناريو: العميل بيكرر الرحلة بالكامل.',learn:'في Omnichannel CX لازم نستخدم المعلومات الموجودة ونمنع repetition.'},
  {t:'أراجع كل التفاعلات السابقة وأقول له بوضوح: أنا هتولى الحالة من هنا.',sat:+18,eff:-16,time:-7,emotion:+18,skill:'Problem Solving',pts:10,grade:'good',branch:'own',fb:'قرار قوي. العميل شعر إن شخصًا أخيرًا امتلك المشكلة.',learn:'Ownership لا يعني أنك تنفذ كل شيء بنفسك؛ يعني أنك تضمن استمرارية الحل.'},
  {t:'أحوّله فورًا للقسم المختص لأن المشكلة ATM.',sat:-5,eff:+12,time:+7,emotion:-12,skill:'Problem Solving',pts:4,grade:'mid',branch:'transfer',fb:'قد يصل للقسم الصحيح، لكن من وجهة نظر العميل دي “لفة” جديدة.',learn:'Right department بدون seamless handoff ما زال Experience ضعيف.'}
 ]}
];
const finalBranches={
 own:{tag:'🔥 Final Crisis • Step 2',title:'آخر قرار…',sub:'اختم الرحلة بشكل يبني ثقة.',text:'راجعت الحالة وعرفت إن التسوية تحتاج وقت. ماذا تقول للعميل؟',choices:[
  {t:'“الموضوع هيتحل، متقلقش.”',sat:-3,eff:0,time:+3,emotion:-4,skill:'Service Recovery',pts:4,grade:'mid',fb:'طمأنة بدون Timeline واضحة تترك العميل في غموض.',learn:'Set expectations: ماذا سيحدث؟ متى؟ وكيف سيتابع؟'},
  {t:'“أنا سجلت الحالة، المتوقع خلال X، وده رقم المرجع، وهنحدثك حتى لو مفيش تغيير.”',sat:+16,eff:-8,time:-4,emotion:+16,skill:'Service Recovery',pts:10,grade:'good',fb:'ممتاز. وضوح + Reference + proactive updates = استعادة ثقة.',learn:'Service Recovery القوي ممكن يحول تجربة سيئة إلى ثقة أعلى.'},
  {t:'“تابع بنفسك بعد يومين لو مفيش رد.”',sat:-8,eff:+10,time:+6,emotion:-10,skill:'Service Recovery',pts:2,grade:'bad',fb:'رجعت مسؤولية المتابعة للعميل.',learn:'Proactive communication يقلل Customer Effort ويزيد الثقة.'}
 ]},
 repeat:{tag:'🔥 Final Crisis • Step 2',title:'العميل انفعل أكثر',sub:'لسه تقدر تعمل Recovery.',text:'العميل قال: “أنا شرحت ده مرتين! ليه أعيده؟” ماذا تفعل؟',choices:[
  {t:'أعتذر، أراجع الملاحظات السابقة وألخصها له قبل أي سؤال إضافي.',sat:+12,eff:-10,time:-4,emotion:+12,skill:'Service Recovery',pts:9,grade:'good',fb:'Recovery جيد. اعترفت بالمجهود الزائد وأصلحت المسار.',learn:'Acknowledgement + use existing data يقلل تكرار الألم.'},
  {t:'أصرّ إن الإجراءات تتطلب إعادة التفاصيل.',sat:-12,eff:+12,time:+8,emotion:-15,skill:'Service Recovery',pts:1,grade:'bad',fb:'الإجراء قد يكون داخليًا، لكنك نقلت تكلفته للعميل بالكامل.',learn:'CX improvement يسأل: كيف نعيد تصميم العملية، لا كيف نجبر العميل عليها؟'},
  {t:'أحوّله لمشرف بدون شرح.',sat:-4,eff:+6,time:+5,emotion:-7,skill:'Service Recovery',pts:4,grade:'mid',fb:'التصعيد وحده ليس Recovery لو العميل سيعيد القصة مرة أخرى.',learn:'Warm escalation أهم من مجرد escalation.'}
 ]},
 transfer:{tag:'🔥 Final Crisis • Step 2',title:'قبل التحويل…',sub:'اختار طريقة Handoff.',text:'القسم المختص متاح الآن. كيف تحول العميل؟',choices:[
  {t:'أقول له اسم القسم وأسيبه يروح له.',sat:-5,eff:+8,time:+4,emotion:-7,skill:'Journey Awareness',pts:3,grade:'bad',fb:'ده Cold Transfer.',learn:'Cold transfer يرفع المجهود ويكرر المعلومات.'},
  {t:'أتواصل مع القسم، أرسل ملخص الحالة، وأتأكد إنهم استلموا العميل بدون إعادة القصة.',sat:+14,eff:-13,time:-5,emotion:+13,skill:'Journey Awareness',pts:10,grade:'good',fb:'ده Warm Handoff ممتاز.',learn:'Omnichannel = continuity of context, not just multiple channels.'},
  {t:'أعطيه رقم القسم وأطلب منه الاتصال لاحقًا.',sat:-9,eff:+12,time:+8,emotion:-12,skill:'Journey Awareness',pts:1,grade:'bad',fb:'زودت خطوة جديدة على عميل مرهق أصلًا.',learn:'كل خطوة إضافية = Customer Effort محتمل.'}
 ]}
};