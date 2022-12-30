document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });



  <form id="contact-form" class="form-horizontal" role="form">
             
  <div class="form-group">
    <div class="col-sm-12">
      <input type="text" class="form-control" id="name" placeholder="YOUR NAME" name="name" value="" required>
    </div>
  </div>

  <div class="form-group">
    <div class="col-sm-12">
      <input type="email" class="form-control" id="email" placeholder="YOUR EMAIL" name="email" value="" required>
    </div>
  </div>

  <textarea class="form-msg" rows="10" placeholder="MESSAGE" name="message" required></textarea>
  
  <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
    <div class="alt-send-button">
      <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
    </div>
  
  </button>
  
</form>