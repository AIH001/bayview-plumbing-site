const TextPolicy = () => {
  return (
    <section className="py-12 px-4 bg-muted">
      <div className="container max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-foreground mb-4">
          Text & Call Policy
        </h3>
        <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
          <p>
            When you call or text (323) 991-8637, you agree to receive text messages related to your service request, scheduling, and appointment updates.
          </p>
          <p>
            We only send messages in direct response to your inquiry. We do not send marketing or promotional texts.
          </p>
          <p>
            You can opt out of messages at any time by replying STOP, END, or CANCEL.<br />
            Reply HELP for more information.
          </p>
          <p>
            Message and data rates may apply. Message frequency varies based on your requests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextPolicy;
